import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Load locale-specific messages and validate the locale
export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is one of the supported ones
  if (!routing.locales.includes(locale as any)) notFound();

  // Dynamically import the correct locale messages
  const messages = (
    await (locale === "uz"
      ? // When using Turbopack, this will enable HMR for `uz`
        import("../../messages/uz.json")
      : import(`../../messages/${locale}.json`))
  ).default;

  return {
    messages, // Return the loaded messages for the current locale
  };
});
