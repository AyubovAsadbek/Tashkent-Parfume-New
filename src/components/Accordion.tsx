import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const items = [
  {
    title: "Dezodorantlar va antiperspirantlar",
    content: [
      { link: "Davolovchi dezodorantlar", href: "/" },
      { link: "Dubay dezodorantlar", href: "/" },
      { link: "Erkaklar uchun", href: "/" },
      { link: "Ayollar uchun", href: "/" },
    ],
  },
  {
    title: "Go'zallik",
    content: [
      { link: "Yuz uchun", href: "/" },
      { link: "Ko'zlar uchun", href: "/" },
      { link: "Lablar", href: "/" },
      { link: "Makiyaj uchun aksessuarlar", href: "/" },
      { link: "Qoshlar", href: "/" },
      { link: "Koreya yuz va tana parvarishi", href: "/" },
      { link: "Yuz va tana parvarishi", href: "/" },
    ],
  },
  {
    title: "Shaxsiy gigiyena va intim vositalar",
    content: [
      { link: "Prokladka va tamponlar", href: "/" },
      { link: "Teri yostiqchalari", href: "/" },
      { link: "Ayollar va erkaklar uchun shaxsiy vositalar", href: "/" },
      { link: "Lubrikant gellar", href: "/" },
      { link: "Intim gellar va sovunlar", href: "/" },
    ],
  },
  {
    title: "Atirlar",
    content: [
      { link: "Tana uchun spreylar", href: "/" },
      { link: "Uniseks", href: "/" },
      { link: "Tana uchun kremlar va losyonlar", href: "/" },
      { link: "Ayollar uchun", href: "/" },
      { link: "Erkaklar uchun", href: "/" },
      { link: "To'plam", href: "/" },
      { link: "Raspiv atirlar", href: "/" },
    ],
  },
  {
    title: "Depilyatsiya va epilyatsiya",
    content: [
      { link: "Depilyatsiya uchun vosklar", href: "/" },
      { link: "Shugaring", href: "/" },
      { link: "Depilyatsiya uchun kremlar", href: "/" },
      { link: "Depilyatsiya uchun qozoncha va vositalar", href: "/" },
      {
        link: "Depilyatsiyadan keyingi oqartiruvchi krem va yog'la",
        href: "/",
      },
    ],
  },
  {
    title: "Soch parvarishi va bo'yoqlar",
    content: [
      { link: "Shampun va quruq shampunlar", href: "/" },
      { link: "Soch uchun lak va muslar", href: "/" },
      { link: "balzam, konditsionerlar va maskalar", href: "/" },
      { link: "soch uchun sprey va kremlar", href: "/" },
      { link: "yog'lar va svritkalar", href: "/" },
      { link: "Gel va vosklar", href: "/" },
      { link: "Bo'yash va kimyoviy vositalar", href: "/" },
    ],
  },
  {
    title: "Dush uchun gel va aksessuarlar",
    content: [
      { link: "Dush va vanna uchun vositalar", href: "/" },
      { link: "Aksessuarlar", href: "/" },
    ],
  },
  {
    title: "Bolalar bo'limi",
    content: [
      { link: "Tagliklar va salfetkalar", href: "/" },
      { link: "Cho'milish va parvarish", href: "/" },
      { link: "Bolalar kosmetikasi va atirlar", href: "/" },
      { link: "So'rg'ich va aksessuarlar", href: "/" },
      { link: "sumka va to'plamlar", href: "/" },
      { link: "Tozalovchi vositalar", href: "/" },
    ],
  },
  {
    title: "Maishiy kimyoviy moddalar va gigiyena vositalari",
    content: [
      { link: "Havoni musaffolashtirgichlar va aromatizatorlar", href: "/" },
      { link: "Og'iz bo'shlig'i gigiyenasi", href: "/" },
      { link: "Maishiy texnika uchun vositalar", href: "/" },
      { link: "Sovunlar", href: "/" },
      { link: "Qog'oz va paxta maxsulotlari", href: "/" },
      { link: "Tozalash va yuvish vositalari", href: "/" },
      { link: "Yuvish uchun vositalar", href: "/" },
    ],
  },
  {
    title: "Erkaklar bo'limi va sartaroshlar uchun vositalar",
    content: [
      {
        link: "Britvalar, ustaralar va almashtiriladigan kassetalar",
        href: "/",
      },
      {
        link: "Soqol olishdan oldin va keyin surish uchun vositalar",
        href: "/",
      },
      { link: "Elektron soch va soqol oladigan vositalar", href: "/" },
      { link: "To'plamlar", href: "/" },
      { link: "Aksessuarlar", href: "/" },
    ],
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations();
  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      setMaxHeight(contentRefs.current[activeIndex]?.scrollHeight || 0);
    } else {
      setMaxHeight(0);
    }
  }, [activeIndex]);

  return (
    <div className="pt-2 h-[135vh] overflow-y-auto block tablet:hidden">
      {items.map((item, index) => (
        <div
          onClick={() => toggleAccordion(index)}
          key={index}
          className="border-b cursor-pointer py-3 group"
        >
          <div className="flex justify-between text-mainDark items-center">
            <h3 className="text-[16px] leading-6 font-semibold">
              {item.title}
            </h3>
            <i
              className={`icon-arrow-down text-mainDark text-2xl group-hover:text-redPrimary  transition duration-300 ${index === activeIndex ? "-rotate-180 text-redPrimary" : ""}`}
            ></i>
          </div>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: index === activeIndex ? `${maxHeight}px` : "0",
            }}
          >
            <div className="flex flex-col mt-1">
              {item.content.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="text-[14px] my-1.5 leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
                >
                  {link.link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2 tablet:hidden my-4">
        <Link
          href="tel:+998951455566"
          className="group text-greySecondary  text-xs flex items-center gap-2 hover:cursor-pointer hover:text-redPrimary"
        >
          <i className="icon-phone transition duration-300 text-[#CDCDD0] group-hover:text-redPrimary inline-block text-[16px]"></i>
          <span className="transition duration-300">+998 (71) 200 70 07</span>
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
    </div>
  );
};

export default Accordion;
