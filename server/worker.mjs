// Synthetic-only learning endpoint. Never add private providers before access checks.
const records = [{period:"sample-01",ride_duration_seconds:1440,sleep_duration_hours:7.9,weather_code:61,is_synthetic:true}];
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const reply = (body, status=200, extra={}) => new Response(JSON.stringify(body), {
      status, headers: {"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store",...extra}
    });
    if (url.pathname !== "/api/dashboard") return reply({error:"Not found"},404);
    if (request.method !== "GET") return reply({error:"Use GET"},405,{Allow:"GET"});
    return reply({source:"synthetic-server",records});
  }
};
