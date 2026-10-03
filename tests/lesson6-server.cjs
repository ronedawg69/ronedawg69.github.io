// Run with: node tests/lesson4-states.cjs (no package dependencies).
// Controlled DOM checks, not a browser layout or accessibility audit.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'api-experiment.html'), 'utf8');
const fixture = fs.readFileSync(path.join(root, 'fixtures/cycle-signals-fixture.js'), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
new vm.Script(script);
new vm.Script(fixture);
const sampleWeather = {
  current: {time:'2000-01-01T12:00',temperature_2m:15,apparent_temperature:14,precipitation:0,weather_code:61,wind_speed_10m:8,wind_direction_10m:180,interval:900},
  current_units: {temperature_2m:'°C',apparent_temperature:'°C',precipitation:'mm',wind_speed_10m:'km/h',wind_direction_10m:'°'}
};
const flush = async () => { for (let i=0;i<12;i++) await Promise.resolve(); };
function setup({fixtureBody=fixture, failedLoads=0, delayFixture=false, weatherStatus=200, weatherBody=sampleWeather, hangWeather=false, serverBody={source:'synthetic-server',records:[{is_synthetic:true,ride_duration_seconds:1440}]}, serverStatus=200, hangServer=false, delayServer=false}={}) {
  const elements = new Map();
  for (const match of html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)) {
    assert(!elements.has(match[1]), 'HTML IDs must be unique');
    elements.set(match[1], makeElement(/\shidden(?:\s|>)/.test(match[0])));
  }
  function makeElement(hidden=false) {
    return {hidden,disabled:false,textContent:'',dataset:{},attrs:{},listeners:{},value:'',
      setAttribute(k,v){this.attrs[k]=v},addEventListener(k,v){this.listeners[k]=v},remove(){}};
  }
  const signal = makeElement(); const timers = new Map(); let nextTimer=0;
  const pending=[];let context;let attempts=0;const weatherRequests=[];
  const el = id => {assert(elements.has(id),'Unknown DOM target: '+id);return elements.get(id)};
  el('ride-preview').value='sample';
  const document = {
    getElementById: el, querySelector: selector => {assert.equal(selector,'.signal');return signal},
    createElement: tag => {assert.equal(tag,'script');return makeElement()},
    body: {appendChild(node){
      attempts++;
      const complete=()=>{
        if(failedLoads-->0){node.onerror();return}
        vm.runInContext(fixtureBody,context);node.onload();
      };
      if(delayFixture)pending.push(complete);else queueMicrotask(complete);
    }}
  };
  context=vm.createContext({document,URL,URLSearchParams,AbortController,Intl,Date,
    console:{error(){}},setTimeout(fn,ms){const id=++nextTimer;timers.set(id,{fn,ms});return id},clearTimeout(id){timers.delete(id)},
    fetch(url,{signal}){
      if(String(url)==='/api/dashboard'){
        if(hangServer)return new Promise((_,reject)=>signal.addEventListener('abort',()=>reject(Object.assign(new Error('aborted'),{name:'AbortError'}))));
        const reply=()=>({ok:serverStatus===200,status:serverStatus,json:async()=>serverBody});
        if(delayServer)return new Promise(resolve=>pending.push(()=>resolve(reply())));
        return Promise.resolve(reply());
      }
      weatherRequests.push({url:String(url),signal});
      if(hangWeather)return new Promise((_,reject)=>signal.addEventListener('abort',()=>reject(Object.assign(new Error('aborted'),{name:'AbortError'}))));
      const status=Array.isArray(weatherStatus)?weatherStatus.shift():weatherStatus;
      return Promise.resolve({ok:status===200,status,json:async()=>weatherBody});
    }
  });
  vm.runInContext(script,context);
  return {el,signal,timers,pending,weatherRequests,attempts:()=>attempts,
    async select(value){el('ride-preview').value=value;await el('ride-preview').listeners.change();await flush()},
    async retryRide(){el('ride-retry').listeners.click();await flush()},
    async retryWeather(){await el('weather-retry').listeners.click();await flush()}};
}
(async()=>{
  const {default:worker}=await import('../server/worker.mjs');
  const request=(p='/api/dashboard',method='GET')=>worker.fetch(new Request('http://localhost'+p,{method}));
  const response=await request();assert.equal(response.status,200);
  assert.equal(response.headers.get('cache-control'),'no-store');
  const body=await response.json();assert.equal(body.source,'synthetic-server');
  assert.equal(body.records[0].sleep_duration_hours,7.9);
  assert(body.records.every(r=>r.is_synthetic===true && r.period.startsWith('sample-')));
  assert.equal((await request('/missing')).status,404);
  assert.equal((await request('/api/dashboard','POST')).status,405);
  let s=setup({serverBody:body});await flush();await s.select('server');
  assert.equal(s.el('ride-status').dataset.state,'ready');
  assert.equal(s.el('ride_duration_seconds').textContent,'1440 seconds');
  assert(s.el('ride-status').textContent.includes('Server replied'));
  for(const options of [{serverStatus:503},{serverBody:{}},{serverBody:{source:'synthetic-server',records:[{is_synthetic:false,ride_duration_seconds:1440}]}}]){
    s=setup(options);await flush();await s.select('server');
    assert.equal(s.el('ride-status').dataset.state,'error');assert.equal(s.el('ride_duration_seconds').textContent,'');
    assert.equal(s.el('weather-reading').hidden,false);
  }
  s=setup({serverBody:{source:'synthetic-server',records:[]}});await flush();await s.select('server');
  assert.equal(s.el('ride-status').dataset.state,'empty');
  s=setup({hangServer:true});await flush();
  s.el('ride-preview').value='server';s.el('ride-preview').listeners.change();await flush();
  for(const timer of s.timers.values())if(timer.ms===12000)timer.fn();
  await flush();assert.equal(s.el('ride-status').dataset.state,'error');
  s=setup({delayServer:true});await flush();
  s.el('ride-preview').value='server';s.el('ride-preview').listeners.change();await flush();
  await s.select('empty');s.pending[0]();await flush();
  assert.equal(s.el('ride-status').dataset.state,'empty');
  s=setup();await flush();await s.select('server');await s.retryRide();
  assert.equal(s.el('ride-preview').value,'server');assert.equal(s.el('ride-status').dataset.state,'ready');
  console.log('PASS Worker contract, routing/methods, browser server rendering, empty/error/timeout, stale responses, retry and weather independence.');
})().catch(error=>{console.error(error);process.exitCode=1});
