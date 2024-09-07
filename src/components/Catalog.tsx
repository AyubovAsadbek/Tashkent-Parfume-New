import Link from "next/link";
import Accordion from "./Accordion";
import Button from "./base/Button";
import { useTranslations } from "next-intl";

type CatalogProps = {
  open: boolean;
};

const Catalog = ({ open }: CatalogProps) => {
  const t = useTranslations();
  return (
    <div
      className={`w-full transition duration-300 ${!open ? "rotate-x-90 opacity-0" : "opacity-100"}   h-screen fixed top-[163px] phone:top-[70px] tablet:top-[144px] bg-white  overflow-y-auto`}
    >
      <div className="container pt-16 max-h-[604px]  justify-between flex-wrap overflow-y-auto  hidden tablet:flex">
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Dezodorantlar va antiperspirantlar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Davolovchi dezodorantlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Dubay dezodorantlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Erkaklar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ayollar uchun
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Go'zallik
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Yuz uchun
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ko'zlar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Lablar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Makiyaj uchun aksessuarlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Qoshlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Koreya yuz va tana parvarishi
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Yuz va tana parvarishi
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Shaxsiy gigiyena va intim vositalar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Prokladka va tamponlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Teri yostiqchalari
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ayollar va erkaklar uchun shaxsiy vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Lubrikant gellar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Intim gellar va sovunlar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Atirlar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tana uchun spreylar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Uniseks
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tana uchun kremlar va losyonlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ayollar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Erkaklar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              To'plam
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Raspiv atirlar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Depilyatsiya va epilyatsiya
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun vosklar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Shugaring
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun kremlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun qozoncha va vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiyadan keyingi oqartiruvchi krem va yog'lar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Soch parvarishi va bo'yoqlar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Shampun va quruq shampunlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Soch uchun lak va muslar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              balzam, konditsionerlar va maskalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              soch uchun sprey va kremlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              yog'lar va svritkalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Gel va vosklar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Bo'yash va kimyoviy vositalar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Dush uchun gel va aksessuarlar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Dush va vanna uchun vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Aksessuarlar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Bolalar bo'limi
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tagliklar va salfetkalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Cho'milish va parvarish
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Bolalar kosmetikasi va atirlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              So'rg'ich va aksessuarlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              sumka va to'plamlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tozalovchi vositalar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Maishiy kimyoviy moddalar va gigiyena vositalari
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Havoni musaffolashtirgichlar va aromatizatorlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Og'iz bo'shlig'i gigiyenasi
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Maishiy texnika uchun vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Sovunlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Qog'oz va paxta maxsulotlari
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tozalash va yuvish vositalari
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Yuvish uchun vositalar
            </Link>
          </div>
        </div>
        <div className="max-w-[278px] w-full flex flex-col mb-10">
          <Link
            href="/"
            className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
          >
            Erkaklar bo'limi va sartaroshlar uchun vositalar
          </Link>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Britvalar, ustaralar va almashtiriladigan kassetalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Soqol olishdan oldin va keyin surish uchun vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Elektron soch va soqol oladigan vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              To'plamlar
            </Link>
            <Link
              href={"/"}
              className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Aksessuarlar
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Button
          text={t("login")}
          iconLeft={true}
          icon="icon-Login text-2xl"
          variant="primary"
          customClass="flex tablet:hidden mt-5"
        />
        <Accordion />
      </div>
    </div>
  );
};

export default Catalog;
