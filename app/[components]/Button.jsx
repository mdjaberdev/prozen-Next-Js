import React from "react";

const Button = ({className, btnTxt}) => {
  return (
    <div
      className={`py-5 px-7.5 rounded-xl bg-[#C3DF94] text-[#063231] text-[18px] font-bold uppercase cursor-pointer ${className}`}
    >
      {btnTxt}
    </div>
  );
};

export default Button;
