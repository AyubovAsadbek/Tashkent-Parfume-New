import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Hanxdle locale-prefixed routes (e.g., /uz, /ru, /la)
    "/(uz|ru|la)/:path*",

    // Handle all other routes, excluding Next.js specific files and assets
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
