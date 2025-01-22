import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/', '/sign-up(.*)', '/public(.*)']);

export default clerkMiddleware((auth, req) => {
  // Allow access to public routes without authentication
  if (isPublicRoute(req)) {
    return; // Do nothing, allow public route access
  }
  // Non-public routes will be protected automatically by Clerk
});

export const config = {
  matcher: [
    // Exclude Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Include API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
