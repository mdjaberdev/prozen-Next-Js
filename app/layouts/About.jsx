"use client";
import React from "react";
import Container from "../[components]/Container";
import Flex from "../[components]/Flex";
import Image from "next/image";
import Button from "../[components]/Button";
import CountUp from "react-countup";

const About = () => {
  return (
    <div>
      <Container>
        <Flex className={"justify-between  pb-32.5"}>
          <div className="w-[48%]">
            <Image
              src={"/about.png"}
              alt="/about.png"
              width={500}
              height={900}
            />
          </div>
          <div className="w-[48%]">
            <h4 className="text-[#F75709] text-base font-bold font-Oswald uppercase">
              About company
            </h4>
            <h3 className="text-[#063231] text-[60px] uppercase font-bold font-Oswald w-150  leading-16.5">
              We committed to helping you achieve your goals
            </h3>
            <p className="text-[#063231] text-[18px] w-lg leading-7.5">
              At the core of our ethos lies a dedication to our clients. Your
              success is our shared triumph, and we're unwavering in our
              commitment to delivering exceptional,
            </p>
            <Button
              className={"!bg-[#063231] text-white inline-block mt-7.5"}
              btnTxt={"Let’s Get in Touch"}
            />
          </div>
        </Flex>
        {/* Counter Part  */}
        <div className="w-324 bg-[#F5F7F7] py-7.5 px-22.5 mb-32.5 flex items-center justify-between">
          <div className="text-center border-r pr-12.5">
            <h3 className="text-[#063231] text-[80px] font-bold font-Oswald">
              <CountUp end={8} duration={5} useEasing={false} />K
              <span className="text-[#F75709]">+</span>
            </h3>
            <h4 className="text-2xl text-[#063231] font-bold font-Oswald">
              Years in business
            </h4>
            <p className="text-[18px] text-[#063231]">
              Creating the successful path
            </p>
          </div>
          <div className="text-center  border-r pr-12.5">
            <h3 className="text-[#063231] text-[80px] font-bold font-Oswald">
              <CountUp end={340} duration={5} useEasing={false} />
              <span className="text-[#F75709]">+</span>
            </h3>
            <h4 className="text-2xl text-[#063231] font-bold font-Oswald">
              Projects delivered
            </h4>
            <p className="text-[18px] text-[#063231]">
              with client satisfaction in 6 years
            </p>
          </div>
          <div className="text-center ">
            <h3 className="text-[#063231] text-[80px] font-bold font-Oswald">
              <CountUp end={28} duration={5} useEasing={false} />
              <span className="text-[#F75709]">+</span>
            </h3>
            <h4 className="text-2xl text-[#063231] font-bold font-Oswald">
              Team members
            </h4>
            <p className="text-[18px] text-[#063231]">
              Working for your success
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
