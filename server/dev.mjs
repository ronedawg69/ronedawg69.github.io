// Dependency-free localhost adapter; executes the same handler as the Worker.
import http from "node:http";
import {readFile} from "node:fs/promises";
import worker from "./worker.mjs";
const assets = new Map([
  ["/api-experiment.html", ["../api-experiment.html","text/html; charset=utf-8"]],
  ["/fixtures/cycle-signals-fixture.js",["../fixtures/cycle-signals-fixture.js","text/javascript; charset=utf-8"]]
]);
http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url,"http://127.0.0.1:8787");
    if (url.pathname.startsWith("/api/")) {
      const response = await worker.fetch(new Request(url,{method:req.method}));
      res.writeHead(response.status,Object.fromEntries(response.headers));
      res.end(await response.text()); return;
    }
    const asset = assets.get(url.pathname === "/" ? "/api-experiment.html" : url.pathname);
    if (!asset || req.method !== "GET") {res.writeHead(404);res.end("Not found");return;}
    res.writeHead(200,{"Content-Type":asset[1],"Cache-Control":"no-store"});
    res.end(await readFile(new URL(asset[0],import.meta.url)));
  } catch {res.writeHead(500);res.end("Local server error");}
}).listen(8787,"127.0.0.1",()=>console.log("Open http://127.0.0.1:8787/api-experiment.html"));
