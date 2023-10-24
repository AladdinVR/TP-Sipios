import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
    const body = `{
        sim1: "patate",
        sim2: "patate",
        lang: "fr",
        type: "General Word2Vec"
      }`;
    const resp = await fetch("http://nlp.polytechnique.fr/similarityscore", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
        })
        .then((resp : any) => {
            const score = resp.json().score;
        }) 
    return new Response(JSON.stringify(_req));
}

serve(handler);