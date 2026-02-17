import Image from "next/image";
import React from "react";
import Container from "../[components]/Container";
import Flex from "../[components]/Flex";
import Button from "../[components]/Button";

const Banner = () => {
  return (
    <div className="bg-[url('/bannerBg.png')] bg-no-repeat bg-cover bg-center pt-28 ">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h1 className="text-white text-[70px] uppercase font-semibold w-130 leading-20">
              Innovative <span className="text-[#C3DF94]">business</span>{" "}
              solutions for everyone
            </h1>
            <p className="text-[20px] text-white w-140 leading-6.5 mt-5">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
            <Button
              className={"bg-[#F75709] text-white inline-block mt-7.5"}
              btnTxt={"Let's Get in Touch"}
            />
          </div>
          <div className="relative z-10">
            <Image
              src="/bannerModel.png"
              width={600}
              height={900}
              alt="Picture of the author"
            />
            <div className="absolute  left-0 top-[65%] w-fit p-6 rounded-[20px] bg-white/10 backdrop-blur-[30px] border border-white/20 shadow-[0px_30px_90px_0px_rgba(4,31,31,0.3)] text-white">
              <h3 className="text-4xl font-bold">92%</h3>

              <p className="text-sm opacity-80">Return on investment</p>
            </div>
            <div className="absolute  right-0 top-[55%]  w-fit p-6 rounded-[20px] bg-white/10 backdrop-blur-[30px] border border-white/20 shadow-[0px_30px_90px_0px_rgba(4,31,31,0.3)] text-white">
              <h3 className="text-4xl font-bold">21.1K</h3>

              <p className="text-sm opacity-80">Happy clients worldwide</p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
