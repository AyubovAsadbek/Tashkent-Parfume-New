import Image from "next/image";
import appIcon from "../../public/images/svg/app-icon.svg";
import logo from "../../public/images/svg/logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { Fragment } from "react";

interface MyComponentProps {
  handleCatalog: () => void;
  open: boolean;
}

const MobileNav: React.FC<MyComponentProps> = ({ handleCatalog, open }) => {
  // Language Switcher
  const t = useTranslations();
  return (
    <Fragment>
      <div className="border-b block phone:hidden">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={appIcon}
              alt="parfum-app"
              className="h-14 w-14 rounded-2xl"
            />
            <div>
              <h4 className="text-base font-semibold">Toshkent parfum</h4>
              <p className="text-xs  text-gray mt-0.5">Shopping</p>
            </div>
          </div>
          <Link
            className="px-4 py-2 bg-red capitalize rounded-2xl transition-300 bg-[#F42558] text-white text-xs  font-semibold"
            href={"/"}
          >
            {t("see")}
          </Link>
        </div>
      </div>
      <div className="bg-white block tablet:hidden">
        <div className="container py-5 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleCatalog}
              className="active:scale-75 transition duration-100"
            >
              {open ? (
                <i className="icon-close-circle text-[#6F6F6F] text-[28px] leading"></i>
              ) : (
                <i className="icon-Hamburger-Menu text-[#6F6F6F] text-[28px] leading"></i>
              )}
            </button>
            {open ? (
              <div className="flex gap-4 ml-5">
                <Link
                  target="_blank"
                  className="group relative"
                  href="https://www.instagram.com/toshkent_parfum_/"
                >
                  <i className="icon-Facebook text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                  <div className="absolute bg-[#5E5F5F] text-white top-[-15px] transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                    facebook
                  </div>
                </Link>
                <Link
                  target="_blank"
                  className="group relative"
                  href="https://www.instagram.com/toshkent_parfum_/"
                >
                  <i className="icon-Instagram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                  <div className="absolute bg-[#5E5F5F] text-white top-[-15px] transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                    instagram
                  </div>
                </Link>
                <Link
                  target="_blank"
                  className="group relative"
                  href="https://t.me/toshkent_parfume"
                >
                  <i className="icon-telegram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                  <div className="absolute bg-[#5E5F5F] text-white top-[-15px] transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                    telegram
                  </div>
                </Link>
              </div>
            ) : (
              <Link href={`/`}>
                <Image src={logo} className="h-9" alt="Logo Image" />
              </Link>
            )}
          </div>
          {/* Responsive Links (orders , cart , favourites) */}

          {open ? (
            <LocaleSwitcher />
          ) : (
            <div className="flex gap-2 items-center">
              <Link
                className="text-greySecondary leading-none transition duration-200 hover:text-redPrimary"
                href="/my-orders"
              >
                <i className="icon-Box text-[28px]"></i>
              </Link>
              <Link
                className="text-greySecondary leading-none transition duration-200 hover:text-redPrimary"
                href="/cart"
              >
                <i className="icon-Cart text-[28px]"></i>
              </Link>
              <Link
                className="text-greySecondary leading-none transition duration-200 hover:text-redPrimary"
                href="/favourites"
              >
                <i className="icon-Heart text-[28px]"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNav;
