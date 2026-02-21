import React from "react";
import Container from "./Container";
import Image from "next/image";
import { PiArrowUpRightThin } from "react-icons/pi";

const Work_card = ({ workCardImg, workCardTitle, workCardDc }) => {
  return (
    <div className="relative group mt-7">
      <Image src={workCardImg} alt="" width={470} height={620} />
      <div className="bg-white w-95  p-5 rounded-[20px] absolute left-5  -bottom-5 group-hover:bottom-5 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer">
        <h4 className="text-[#063231] text-[28px] uppercase font-bold font-Oswald -tracking-[0.56px] w-75 leading-8">
          {workCardTitle}
        </h4>
        <p className="text-[#063231] text-base flex justify-between items-center">
          {workCardDc}
          <PiArrowUpRightThin className="text-[#F75709] text-4xl font-bold" />
        </p>
      </div>
    </div>
  );
};

export default Work_card;
