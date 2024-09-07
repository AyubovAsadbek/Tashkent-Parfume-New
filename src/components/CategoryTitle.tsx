import React from "react";

type CategoryTitleProps = {
  text: string;
};

const CategoryTitle = ({ text }: CategoryTitleProps) => {
  return (
    <h4 className={`font-semibold text-[16px] leading-6 text-mainDark`}>
      {text}
    </h4>
  );
};

export default CategoryTitle;
