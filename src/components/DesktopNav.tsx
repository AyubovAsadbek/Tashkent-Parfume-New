import Image from "next/image";
import logo from "../../public/images/svg/logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "./base/Button";
import LocaleSwitcher from "./LocaleSwitcher";
import { Fragment } from "react";
import FormInput from "./base/FormInput";

interface MyComponentProps {
  handleCatalog: () => void;
  open: boolean;
}

const DesktopNav: React.FC<MyComponentProps> = ({ handleCatalog, open }) => {
  // Language Switcher
  const t = useTranslations();
  return (
    <Fragment>
      <div className="bg-greyPrimar hidden tablet:block">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="tel:+998951455566"
              className="group text-greySecondary  text-xs flex items-center gap-2 hover:cursor-pointer hover:text-redPrimary"
            >
              <i className="icon-phone transition duration-300 text-[#CDCDD0] group-hover:text-redPrimary inline-block text-[16px]"></i>
              <span className="transition duration-300">
                +998 (71) 200 70 07
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://yandex.uz/maps/-/CDsDEB~M"
              className="group text-greySecondary  text-xs flex items-center gap-1 hover:cursor-pointer hover:text-redPrimary"
            >
              <svg
                className="stroke-[#CDCDD0] transition duration-300 group-hover:stroke-redPrimary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7998 8.79999L17.5588 9.05297C18.3508 9.31698 18.7468 9.44898 18.9733 9.76325C19.1998 10.0775 19.1998 10.4949 19.1998 11.3298V15.8632C19.1998 16.8959 19.1998 17.4123 18.928 17.744C18.8357 17.8566 18.7237 17.9515 18.5974 18.0241C18.2255 18.2376 17.7162 18.1527 16.6975 17.9829C15.6924 17.8154 15.1898 17.7317 14.6917 17.7733C14.5169 17.788 14.3432 17.8141 14.1718 17.8515C13.6835 17.9582 13.2237 18.188 12.3043 18.6477C11.1045 19.2476 10.5046 19.5476 9.86607 19.64C9.67374 19.6679 9.47964 19.6817 9.28531 19.6813C8.64009 19.6801 8.00929 19.4698 6.74771 19.0493L6.44086 18.947C5.64884 18.683 5.25282 18.551 5.02631 18.2367C4.7998 17.9225 4.7998 17.505 4.7998 16.6702V12.7264C4.7998 11.3993 4.7998 10.7357 5.19054 10.3788C5.25891 10.3164 5.33428 10.2621 5.41514 10.217C5.87726 9.95914 6.50676 10.169 7.76577 10.5886"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.2002 8.56024C7.2002 6.04169 9.34923 4 12.0002 4C14.6512 4 16.8002 6.04169 16.8002 8.56024C16.8002 11.0591 15.2682 13.975 12.878 15.0177C12.3207 15.2608 11.6796 15.2608 11.1224 15.0177C8.73219 13.975 7.2002 11.0591 7.2002 8.56024Z"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="11.9999"
                  cy="8.80001"
                  rx="1.6"
                  ry="1.6"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="transition duration-300">{t("location")}</span>
            </Link>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex gap-4">
              <Link
                target="_blank"
                className="group relative"
                href="https://www.instagram.com/toshkent_parfum_/"
              >
                <i className="icon-Facebook text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  facebook
                </div>
              </Link>
              <Link
                target="_blank"
                className="group relative"
                href="https://www.instagram.com/toshkent_parfum_/"
              >
                <i className="icon-Instagram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  instagram
                </div>
              </Link>
              <Link
                target="_blank"
                className="group relative"
                href="https://t.me/toshkent_parfume"
              >
                <i className="icon-telegram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  telegram
                </div>
              </Link>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] tabletsm:bg-white py-4 tablet:py-4 border-b border-[#F2F3F5]">
        <div className="container flex items-center justify-between">
          <Link href={"/"} className="mr-6 hidden tablet:block ">
            <Image src={logo} alt="Logo Image" />
          </Link>
          <Button
            text={t("catalog")}
            variant="dark"
            iconLeft={true}
            icon={
              open
                ? "icon-close-circle text-2xl group-active:scale-75 transition duration-100"
                : "icon-Hamburger-Menu text-2xl group-active:scale-75 transition duration-100"
            }
            customClass="hidden tablet:flex"
            onClick={handleCatalog}
          />
          <form className="tablet:max-w-[530px] w-full group tablet:mr-2">
            <FormInput
              id="search"
              type="text"
              placeholder={t("search")}
              before="icon-search"
              parentClass="h-11 border border-transparent tablet:ml-2 items-center bg-[#ECEDEF] rounded-lg w-full group-focus-within:border-black"
              inputClass="h-full w-full outline-none bg-transparent "
            />
          </form>
          <div className="ml-3 hidden gap-5 tablet:flex">
            <Link
              href="/my-orders"
              className="flex items-center flex-col w-[67px] capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Box text-[28px]"></i>
              <span className="text-xs">{t("myOrders")}</span>
            </Link>
            <Link
              href={`/cart`}
              className="flex items-center flex-col capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Cart text-[28px]"></i>
              <span className="text-xs">{t("cart")}</span>
            </Link>
            <Link
              href={`/favourites`}
              className="flex items-center flex-col capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Heart text-[28px]"></i>
              <span className="text-xs">{t("saved")}</span>
            </Link>
          </div>
          <Button
            text={t("login")}
            iconLeft={true}
            icon="icon-Login text-2xl"
            variant="primary"
            customClass="ml-8 hidden tablet:flex"
          />
        </div>
      </div>
      <div className="bg-white py-3 hidden tablet:block">
        <div className="container flex items-center gap-1 justify-between">
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("Beauty")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("Bags")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("Perfume")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("HairCare")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("HouseholdChemicals")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("MensSection")}
          </Link>
          <hr className="w-[1.50px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("DepilationAndEpilation")}
          </Link>
          <hr className="w-[1.60px] h-3 rounded-[1px] bg-[#CDCDD0] border-none" />
          <Link
            href="/"
            className="text-mainDark text-[14px] text-center font-semibold transition duration-200 hover:text-redPrimary hover:-translate-y-0.5"
          >
            {t("DeodorantsAndAntiperspirants")}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopNav;
