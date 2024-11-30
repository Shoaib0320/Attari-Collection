// export { auth as middleware } from "@/auth"


// src/middleware.js (or lib/middleware.js)

import { corsHeaders } from "@/lib/cors";
import { NextResponse } from "next/server";

export { auth as middleware } from "@/auth"

// Global CORS Middleware
export function middleware(req) {
  const res = NextResponse.next();

  // Add CORS headers using the imported corsHeaders
  res.headers.set("Access-Control-Allow-Origin", corsHeaders["Access-Control-Allow-Origin"]);
  res.headers.set("Access-Control-Allow-Methods", corsHeaders["Access-Control-Allow-Methods"]);
  res.headers.set("Access-Control-Allow-Headers", corsHeaders["Access-Control-Allow-Headers"]);

  // Handle preflight OPTIONS requests (for CORS)
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: res.headers });
  }

  return res;
}
