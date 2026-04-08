"use client";
import Container from "../[components]/Container";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import React, { useRef } from "react";

const Tastmonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <Container>
        <div className="flex bg-[#F5F7F7] pt-[50px] pb-[100px] px-[88px] mt-[130px]">
          <div className="">
            <h5 className="text-[#F75709] text-base font-semibold font-Oswald uppercase">
              TESTIMONIALS
            </h5>
            <h3 className="text-[#063231] text-[60px] font-semibold font-Oswald uppercase w-87.5 leading-[66px] -tracking-[1.2] pt-2.5">
              What are they saying about us?
            </h3>
            {/* Custom Buttons */}
            <div className="flex gap-x-5 mt-[120px]">
              <button
                ref={prevRef}
                className="p-3 text-3xl hover:bg-[#F75709] rounded-full hover:text-white border"
              >
                <FaAngleLeft />
              </button>
              <button
                ref={nextRef}
                className="p-3 text-3xl hover:bg-[#F75709] rounded-full hover:text-white border"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            <SwiperSlide>
              {" "}
              <div className="border-l pl-[71px] border-[#D7DEDE]">
                <div className="flex gap-x-1">
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                </div>
                <p className="text-[#063231] text-2xl font-extrabold font-poppins w-[600px] pt-1">
                  "Guidance transformed the way we business. Their innovative
                  solutions and forward-thinking approach revitalized our
                  organization. The results for themselves, and we couldn't be
                  happier with the outcome. Trusting Guidance was a wise
                  investment in our future."
                </p>
                <Image
                  className="pt-[50px]"
                  src={"/reviewOne.png"}
                  alt="reviewOne"
                  height={60}
                  width={60}
                />
                <h5 className="text-[#063231] text-xl font-semibold font-Oswald uppercase">
                  John Smith
                </h5>
                <p className="text-[#063231] text-lg font-poppins">
                  Head of Developer
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-l pl-[71px] border-[#D7DEDE]">
                <div className="flex gap-x-1">
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                </div>
                <p className="text-[#063231] text-2xl font-extrabold font-poppins w-[600px] pt-1">
                  "Guidance transformed the way we business. Their innovative
                  solutions and forward-thinking approach revitalized our
                  organization. The results for themselves, and we couldn't be
                  happier with the outcome. Trusting Guidance was a wise
                  investment in our future."
                </p>
                <Image
                  className="pt-[50px]"
                  src={"/reviewOne.png"}
                  alt="reviewOne"
                  height={60}
                  width={60}
                />
                <h5 className="text-[#063231] text-xl font-semibold font-Oswald uppercase">
                  John Smith
                </h5>
                <p className="text-[#063231] text-lg font-poppins">
                  Head of Developer
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="border-l pl-[71px] border-[#D7DEDE]">
                <div className="flex gap-x-1">
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                  <FaStar className="text-[#F75709]" />
                </div>
                <p className="text-[#063231] text-2xl font-extrabold font-poppins w-[600px] pt-1">
                  "Guidance transformed the way we business. Their innovative
                  solutions and forward-thinking approach revitalized our
                  organization. The results for themselves, and we couldn't be
                  happier with the outcome. Trusting Guidance was a wise
                  investment in our future."
                </p>
                <Image
                  className="pt-[50px]"
                  src={"/reviewOne.png"}
                  alt="reviewOne"
                  height={60}
                  width={60}
                />
                <h5 className="text-[#063231] text-xl font-semibold font-Oswald uppercase">
                  John Smith
                </h5>
                <p className="text-[#063231] text-lg font-poppins">
                  Head of Developer
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Tastmonial;
