import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      <option className="group-hover:text-black capitalize" value="uz">
        O'zbekcha
      </option>
      <option className="group-hover:text-black capitalize" value="la">
        ўзбекча
      </option>
      <option className="group-hover:text-black capitalize" value="ru">
        русский
      </option>
    </LocaleSwitcherSelect>
  );
}
