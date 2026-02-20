import React from "react";
import Container from "../[components]/Container";
import Image from "next/image";

const Service = () => {
  return (
    <div>
      <Container>
        <div className="pt-32.5 pb-20.5">
          <div className="text-center font-semibold font-Oswald uppercase">
            <h4 className="text-[#F75709] text-base">Our Services</h4>
            <h3 className="text-[#063231] text-[60px] px-75 leading-16.5">
              Versatile Range <br /> of Business Solutions
            </h3>
          </div>
          <div className="mt-15 flex gap-x-3">
            <div className="w-159 bg-[#F5F7F7] py-10 px-7.5 rounded-[20px]">
              <Image
                src={"/srvItm.png"}
                alt="srvItm.png"
                height={60}
                width={50}
              />
              <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald mt-12.5">
                Finance Planning
              </h4>
              <p className="text-[#063231] text-[18px] w-138.75 leading-7.5 mt-2">
                Our team prioritizes usability and accessibility to ensure that
                every visitor enjoys a seamless intuitive.
              </p>
            </div>
            <div className="w-159 bg-[#F5F7F7] py-10 px-7.5 rounded-[20px]">
              <Image
                src={"/srvItm.png"}
                alt="srvItm.png"
                height={60}
                width={50}
              />
              <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald mt-12.5">
                Finance Planning
              </h4>
              <p className="text-[#063231] text-[18px] w-138.75 leading-7.5 mt-2">
                Our team prioritizes usability and accessibility to ensure that
                every visitor enjoys a seamless intuitive.
              </p>
            </div>
          </div>
          <div className="mt-7.5 flex  gap-x-3">
            <div className="w-159 bg-[#F5F7F7] py-10 px-7.5 rounded-[20px]">
              <Image
                src={"/srvItm.png"}
                alt="srvItm.png"
                height={60}
                width={50}
              />
              <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald mt-12.5">
                Finance Planning
              </h4>
              <p className="text-[#063231] text-[18px] w-138.75 leading-7.5 mt-2">
                Our team prioritizes usability and accessibility to ensure that
                every visitor enjoys a seamless intuitive.
              </p>
            </div>
            <div className="w-159 bg-[#F5F7F7] py-10 px-7.5 rounded-[20px]">
              <Image
                src={"/srvItm.png"}
                alt="srvItm.png"
                height={60}
                width={50}
              />
              <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald mt-12.5">
                Finance Planning
              </h4>
              <p className="text-[#063231] text-[18px] w-138.75 leading-7.5 mt-2">
                Our team prioritizes usability and accessibility to ensure that
                every visitor enjoys a seamless intuitive.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
