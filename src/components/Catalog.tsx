import Link from "next/link";
import Accordion from "./Accordion";
import Button from "./base/Button";
import { useTranslations } from "next-intl";

interface LinkItem {
  href: string;
  label: string;
}

interface catalogs {
  title: string;
  titleHref: string;
  links: LinkItem[];
}

type CatalogProps = {
  open: boolean;
};

const catalogs: catalogs[] = [
  {
    title: "Dezodorantlar va antiperspirantlar",
    titleHref: "/",
    links: [
      { href: "/", label: "Davolovchi dezodorantlar" },
      { href: "/", label: "Dubay dezodorantlar" },
      { href: "/", label: "Erkaklar uchun" },
      { href: "/", label: "Ayollar uchun" },
    ],
  },
  {
    title: "Go'zallik",
    titleHref: "/",
    links: [
      { href: "/", label: "Yuz uchun" },
      { href: "/", label: "Ko'zlar uchun" },
      { href: "/", label: "Lablar" },
      { href: "/", label: "Makiyaj uchun aksessuarlar" },
      { href: "/", label: "Qoshlar" },
      { href: "/", label: "Koreya yuz va tana parvarishi" },
      { href: "/", label: "Yuz va tana parvarishi" },
    ],
  },
  {
    title: "Shaxsiy gigiyena va intim vositalar",
    titleHref: "/",
    links: [
      { href: "/", label: "Prokladka va tamponlar" },
      { href: "/", label: "Teri yostiqchalari" },
      { href: "/", label: "Ayollar va erkaklar uchun shaxsiy vositalar" },
      { href: "/", label: "Lubrikant gellar" },
      { href: "/", label: "Intim gellar va sovunlar" },
    ],
  },
  {
    title: "Atirlar",
    titleHref: "/",
    links: [
      { href: "/", label: "Tana uchun spreylar" },
      { href: "/", label: "Uniseks" },
      { href: "/", label: "Tana uchun kremlar va losyonlar" },
      { href: "/", label: "Ayollar uchun" },
      { href: "/", label: "Erkaklar uchun" },
      { href: "/", label: "To'plam" },
      { href: "/", label: "Raspiv atirlar" },
    ],
  },
  {
    title: "Depilyatsiya va epilyatsiya",
    titleHref: "/",
    links: [
      { href: "/", label: "Depilyatsiya uchun vosklar" },
      { href: "/", label: "Shugaring" },
      { href: "/", label: "Depilyatsiya uchun kremlar" },
      { href: "/", label: "Depilyatsiya uchun qozoncha va vositalar" },
      {
        href: "/",
        label: "Depilyatsiyadan keyingi oqartiruvchi krem va yog'la",
      },
    ],
  },
  {
    title: "Soch parvarishi va bo'yoqlar",
    titleHref: "/",
    links: [
      { href: "/", label: "Shampun va quruq shampunlar" },
      { href: "/", label: "Soch uchun lak va muslar" },
      { href: "/", label: "balzam, konditsionerlar va maskalar" },
      { href: "/", label: "soch uchun sprey va kremlar" },
      {
        href: "/",
        label: "yog'lar va svritkalar",
      },
      {
        href: "/",
        label: "Gel va vosklar",
      },
      {
        href: "/",
        label: "Bo'yash va kimyoviy vositalar",
      },
    ],
  },
  {
    title: "Dush uchun gel va aksessuarlar",
    titleHref: "/",
    links: [
      { href: "/", label: "Dush va vanna uchun vositalar" },
      { href: "/", label: "Aksessuarlar" },
    ],
  },
  {
    title: "Bolalar bo'limi",
    titleHref: "/",
    links: [
      { href: "/", label: "Tagliklar va salfetkalar" },
      { href: "/", label: "Cho'milish va parvarish" },
      { href: "/", label: "Bolalar kosmetikasi va atirlar" },
      { href: "/", label: "So'rg'ich va aksessuarlar" },
      { href: "/", label: "sumka va to'plamlar" },
      { href: "/", label: "Tozalovchi vositalar" },
    ],
  },
  {
    title: "Maishiy kimyoviy moddalar va gigiyena vositalari",
    titleHref: "/",
    links: [
      { href: "/", label: "Havoni musaffolashtirgichlar va aromatizatorlar" },
      { href: "/", label: "Og'iz bo'shlig'i gigiyenasi" },
      { href: "/", label: "Maishiy texnika uchun vositalar" },
      { href: "/", label: "Sovunlar" },
      { href: "/", label: "Qog'oz va paxta maxsulotlari" },
      { href: "/", label: "Tozalash va yuvish vositalari" },
      { href: "/", label: "Yuvish uchun vositalar" },
    ],
  },
  {
    title: "Erkaklar bo'limi va sartaroshlar uchun vositalar",
    titleHref: "/",
    links: [
      {
        href: "/",
        label: "Britvalar, ustaralar va almashtiriladigan kassetalar",
      },
      {
        href: "/",
        label: "Soqol olishdan oldin va keyin surish uchun vositalar",
      },
      { href: "/", label: "Elektron soch va soqol oladigan vositalar" },
      { href: "/", label: "To'plamlar" },
      { href: "/", label: "Aksessuarlar" },
    ],
  },
];

const Catalog = ({ open }: CatalogProps) => {
  const t = useTranslations();
  return (
    <div
      className={`w-full transition duration-300 ${!open ? "rotate-x-90 opacity-0" : "opacity-100"}   h-screen fixed top-[163px] phone:top-[70px] tablet:top-[144px] bg-white  overflow-y-auto`}
    >
      <div className="container pt-16 max-h-[604px]  justify-between flex-wrap overflow-y-auto  hidden tablet:flex">
        {catalogs.map((item, index) => (
          <div key={index} className="max-w-[278px] w-full flex flex-col mb-10">
            <Link
              href={item.titleHref}
              className="text-xl leading-6 hover:text-redPrimary transition duration-300 text-mainDark font-bold mb-6"
            >
              {item.title}
            </Link>
            <div className="flex flex-col gap-3">
              {item.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="text-[16px] leading-5 text-mainDark font-semibold transition duration-200 hover:text-redPrimary hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
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
