import { useState } from "react";
import Link from "next/link";
import CategoryTitle from "./CategoryTitle";
import CategoryLink from "./CategoryLink";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-3 block tablet:hidden h-[120vh] pb-[150px] overflow-y-auto">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox"
            checked={openIndex === 0}
            onChange={() => toggleAccordion(0)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(0)}
          >
            <CategoryTitle text="Dezodorantlar va antiperspirantlar" />
          </div>
          <div
            className={`collapse-content ${openIndex === 0 ? "block" : "hidden"} flex flex-col gap-3`}
          >
            <CategoryLink href="/" text="Davolovchi dezodorantlar" />
            <CategoryLink href="/" text="Dubay dezodorantlar" />
            <CategoryLink href="/" text="Erkaklar uchun" />
            <CategoryLink href="/" text="Ayollar uchun" />
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox text-center items-center"
            checked={openIndex === 1}
            onChange={() => toggleAccordion(1)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <CategoryTitle text="Go'zallik" />
          </div>
          <div
            className={`collapse-content ${openIndex === 1 ? "block" : "hidden"} flex flex-col gap-3`}
          >
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Yuz uchun
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ko'zlar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Lablar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Makiyaj uchun aksessuarlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Qoshlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Koreya yuz va tana parvarishi
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Yuz va tana parvarishi
            </Link>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox"
            checked={openIndex === 2}
            onChange={() => toggleAccordion(2)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h4 className="font-semibold text-[16px] leading-6 text-mainDark">
              Shaxsiy gigiyena va intim vositalar
            </h4>
          </div>
          <div
            className={`collapse-content ${openIndex === 2 ? "block" : "hidden"} flex flex-col gap-2`}
          >
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Prokladka va tamponlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Teri yostiqchalari
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ayollar va erkaklar uchun shaxsiy vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Lubrikant gellar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Intim gellar va sovunlar
            </Link>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox"
            checked={openIndex === 3}
            onChange={() => toggleAccordion(3)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h4 className="font-semibold text-[16px] leading-6 text-mainDark">
              Atirlar
            </h4>
          </div>
          <div
            className={`collapse-content ${openIndex === 3 ? "block" : "hidden"} flex flex-col gap-2`}
          >
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tana uchun spreylar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Uniseks
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Tana uchun kremlar va losyonlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Ayollar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Erkaklar uchun
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              To'plam
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Raspiv atirlar
            </Link>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox"
            checked={openIndex === 4}
            onChange={() => toggleAccordion(4)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(4)}
          >
            <h4 className="font-semibold text-[16px] leading-6 text-mainDark">
              Depilyatsiya va epilyatsiya
            </h4>
          </div>
          <div
            className={`collapse-content ${openIndex === 4 ? "block" : "hidden"} flex flex-col gap-2`}
          >
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun vosklar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Shugaring
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun kremlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiya uchun qozoncha va vositalar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Depilyatsiyadan keyingi oqartiruvchi krem va yog'lar
            </Link>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-b rounded-none">
          <input
            type="checkbox"
            checked={openIndex === 5}
            onChange={() => toggleAccordion(5)}
            className="hidden"
          />
          <div
            className="collapse-title cursor-pointer"
            onClick={() => toggleAccordion(5)}
          >
            <h4 className="font-semibold text-[16px] leading-6 text-mainDark">
              Soch parvarishi va bo'yoqlar
            </h4>
          </div>
          <div
            className={`collapse-content ${openIndex === 5 ? "block" : "hidden"} flex flex-col gap-2`}
          >
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Shampun va quruq shampunlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Soch uchun lak va muslar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              balzam, konditsionerlar va maskalar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              soch uchun sprey va kremlar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              yog'lar va svritkalar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Gel va vosklar
            </Link>
            <Link
              href={"/"}
              className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
            >
              Bo'yash va kimyoviy vositalar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
