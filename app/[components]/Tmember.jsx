import Image from "next/image";
import React from "react";

const Tmember = ({ memberImg, memberNam, position }) => {
  return (
    <div>
      <Image src={memberImg} alt="" width={306} height={370} />
      <div className="text-center">
        <h4 className="text-[#063231] text-2xl font-semibold font-Oswald pt-2.5 uppercase">
          {memberNam}
        </h4>
        <h5 className="text-[#063231] text-lg font-poppins">{position}</h5>
      </div>
    </div>
  );
};

export default Tmember;
