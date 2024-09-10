import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// Define the routing configuration
export const routing = defineRouting({
  locales: ["uz", "ru", "la"], // Supported locales
  defaultLocale: "uz", // Default locale set to 'uz'

  // Define paths for each locale
  pathnames: {
    "/": "/",
    "/pathnames": {
      uz: "/uz/pathname", // Set actual paths for each locale
      ru: "/ru/pathname",
      la: "/la/pathname",
    },
  },
});

// Types for using localized pathnames and locales
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Create localized navigation tools
export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
