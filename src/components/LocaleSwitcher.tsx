"use client";

import { useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  function handleLocaleChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        className="capitalize text-xs flex group transition duration-300 items-center text-greySecondary gap-1 bg-transparent px-2 py-1 rounded outline-none hover:text-redPrimary"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
      >
        {locale === "uz"
          ? "O'zbekcha"
          : locale === "ru"
            ? "русский"
            : "ўзбекча"}
        <i
          className={`icon-arrow-down transition group-hover:text-redPrimary duration-300  text-[18px] ${isOpen ? "-rotate-180" : ""}`}
        ></i>
      </button>

      <div
        className={`absolute z-10 transition duration-300 translate-y-4  mt-2 w-full opacity-0 ${isOpen ? "opacity-100 translate-y-0" : ""}`}
      >
        <button
          className={`font-semibold capitalize border-[#F2F3F5] border-t border-l border-r w-full flex items-center text-xs rounded-t-lg  h-9 justify-start pl-3 bg-white hover:bg-[#f8edf1] ${locale === "uz" ? "text-redPrimary" : ""}`}
          onClick={() => handleLocaleChange("uz")}
        >
          O'zbekcha{" "}
          {locale === "uz" ? <i className="icon-tick text-xl"></i> : null}
        </button>
        <button
          className={`font-semibold capitalize border-[#F2F3F5] border w-full flex items-center text-xs  h-9 justify-start pl-3 bg-white hover:bg-[#f8edf1] ${locale === "la" ? "text-redPrimary" : ""}`}
          onClick={() => handleLocaleChange("la")}
        >
          ўзбекча
          {locale === "la" ? <i className="icon-tick text-xl"></i> : null}
        </button>
        <button
          className={`font-semibold capitalize border-[#F2F3F5] border-b border-l border-r w-full flex items-center text-xs rounded-b-lg  h-9 justify-start pl-3 bg-white hover:bg-[#f8edf1] ${locale === "ru" ? "text-redPrimary" : ""}`}
          onClick={() => handleLocaleChange("ru")}
        >
          русский
          {locale === "ru" ? <i className="icon-tick text-xl"></i> : null}
        </button>
      </div>
    </div>
  );
}
