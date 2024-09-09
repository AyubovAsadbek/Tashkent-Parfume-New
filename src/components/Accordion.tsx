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
    </div>
  );
};

export default Accordion;
