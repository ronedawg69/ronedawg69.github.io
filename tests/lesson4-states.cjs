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
function setup({fixtureBody=fixture, failedLoads=0, delayFixture=false, weatherStatus=200, weatherBody=sampleWeather, hangWeather=false}={}) {
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
  let s=setup();await flush();
  assert.equal(s.el('ride_duration_seconds').textContent,'1440 seconds');
  assert.equal(s.el('ride-status').dataset.state,'ready');
  assert.equal(s.el('weather-condition').textContent,'Slight rain');
  assert.equal(s.el('interval').textContent,'15 minutes');
  for(const state of ['loading','empty','error']){
    await s.select(state);assert.equal(s.el('ride-status').dataset.state,state);
    assert.equal(s.el('ride_duration_seconds').textContent,'');assert(s.el('ride_duration_seconds').hidden);
    assert.equal(s.el('ride-panel').attrs['aria-busy'],String(state==='loading'));
    if(state!=='loading'){assert(!s.el('ride-retry').hidden);await s.retryRide();assert.equal(s.el('ride-status').dataset.state,'ready')}
  }
  console.log('PASS loaded sample, loading/empty/error previews, stale-value clearing and recovery');
  for(const [body,state] of [['const cycleSignalsFixture=[];','empty'],['const cycleSignalsFixture=[{is_synthetic:true,ride_duration_seconds:0}];','error'],['const cycleSignalsFixture=[{is_synthetic:false,ride_duration_seconds:1440}];','error'],['/* missing data */','error'],['const cycleSignalsFixture={};','error']]){
    s=setup({fixtureBody:body});await flush();assert.equal(s.el('ride-status').dataset.state,state);
    assert.equal(s.el('ride_duration_seconds').textContent,'');assert.equal(s.el('weather-reading').hidden,false);
  }
  console.log('PASS empty, malformed, non-synthetic and missing fixtures; weather still works');
  s=setup({failedLoads:1});await flush();assert.equal(s.el('ride-status').dataset.state,'error');
  await s.retryRide();assert.equal(s.el('ride-status').dataset.state,'ready');assert.equal(s.attempts(),2);
  console.log('PASS failed fixture request and successful retry');
  s=setup({delayFixture:true});assert.equal(s.el('ride-status').dataset.state,'loading');
  await s.select('empty');s.pending[0]();await flush();assert.equal(s.el('ride-status').dataset.state,'empty');
  await s.select('sample');assert.equal(s.el('ride-status').dataset.state,'ready');assert.equal(s.attempts(),1);
  console.log('PASS delayed response cannot overwrite newer state; loaded fixture reused');
  s=setup({weatherStatus:[503,200]});await flush();assert.equal(s.el('weather-status').dataset.state,'error');
  assert.equal(s.el('ride-status').dataset.state,'ready');assert(!s.el('weather-retry').hidden);
  await s.retryWeather();assert.equal(s.weatherRequests.length,2);assert.equal(s.el('weather-reading').hidden,false);assert.equal(s.signal.attrs['aria-busy'],'false');
  s=setup({weatherBody:{}});await flush();assert.equal(s.el('weather-status').dataset.state,'error');
  console.log('PASS weather HTTP failure, malformed response and retry request; ride remains visible');
  s=setup({hangWeather:true});await flush();assert.equal(s.el('weather-status').dataset.state,'loading');
  assert.equal(s.el('weather-retry').disabled,true);
  for(const timer of s.timers.values())if(timer.ms===12000)timer.fn();
  await flush();assert.equal(s.el('weather-status').dataset.state,'error');
  assert(s.el('weather-status').textContent.includes('took too long'));
  assert.equal(s.signal.attrs['aria-busy'],'false');assert.equal(s.el('weather-retry').disabled,false);
  console.log('PASS weather timeout clears busy state and enables retry');
  console.log('All Lesson 4 controlled checks passed. Browser layout not covered.');
})().catch(error=>{console.error(error);process.exitCode=1});
