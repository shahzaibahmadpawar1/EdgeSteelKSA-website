import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

/**
 * next-intl middleware handles locale detection and routing.
 * Visiting / → stays at / (defaultLocale = 'en', no prefix)
 * Visiting /ar  → Arabic version with RTL
 *
 * Strategy: 'as-needed' means the default locale (en) gets no prefix,
 * all other locales (ar) get a /ar prefix.
 */
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

export const config = {
  // Match every path except _next internals and static assets
  matcher: ["/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico|css|js)).*)"],
};
