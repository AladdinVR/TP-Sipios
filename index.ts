import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
    const body = `{
        "sim1": "patate",
        "sim2": "patate",
        "lang": "fr",
        "type": "General Word2Vec"
      }`;
    return new Response(JSON.stringify(_req.body));
}

serve(handler);