import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uz", "ru", "la"], // Updated locales
  defaultLocale: "uz", // Set 'uz' as the default locale, or change as needed
  pathnames: {
    "/": "/",
    "/pathnames": {
      uz: "",
      ru: "",
      la: "",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
