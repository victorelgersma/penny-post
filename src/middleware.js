import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.request.method === "POST") {
    console.log("POST route hit");
  }
  return next();
});
