import Image from 'next/image'
import React from 'react'

const Rposts = ({Img, date, grp, title}) => {
  return (
    <div className="border border-[#D7DEDE] rounded-[20px]">
      <Image src={Img} alt="IMg" height={318} width={414} />
      <div className="px-6 pb-7.25">
        <div className="mt-2.5 flex gap-x-2 text-[#063231] text-base font-poppins">
          <p>{date}</p>|<p>{grp}</p>
        </div>
        <h4 className="text-[#063231] text-[28px] font-Oswald font-semibold w-91.5 leading-[33.9px] uppercase -tracking-[0.5px]">
          {title}
        </h4>
        <h5 className="text-[#F75709] text-base font-Oswald font-semibold uppercase mt-8 cursor-pointer inline-block underline">
          Read More
        </h5>
      </div>
    </div>
  );
}

export default Rposts
