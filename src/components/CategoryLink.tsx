import Link from "next/link";
import React from "react";

type CategoryLinkProps = {
  text: string;
  href: string;
};

const CategoryLink = ({ text, href }: CategoryLinkProps) => {
  return (
    <Link
      href={href}
      className="text-[14px] leading-5 text-mainDark transition duration-200 hover:text-redPrimary hover:translate-x-1"
    >
      {text}
    </Link>
  );
};

export default CategoryLink;
