// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  // Check if the access token exists
  if (req.statusCode === 401) {
    // Optionally, you can redirect to a login page or return an error response
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if no token
  }

  // Create a new response to add the authorization header
  const response = NextResponse.next();

  // Set the Authorization header
  //response.headers.set(Authorization, `Bearer ${accessToken}`);

  // Continue with the modified response
  return response;
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ["/api/v2/:path*"], // Apply middleware to API routes
};
