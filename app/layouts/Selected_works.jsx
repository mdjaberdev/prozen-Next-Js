"use client";
import React, { useRef } from "react";
import Container from "../[components]/Container";
import Work_card from "../[components]/Work_card";
import Flex from "../[components]/Flex";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Selected_works = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <Container className={"pb-32.5"}>
        <div className="font-bold font-Oswald uppercase">
          <h4 className="text-[#F75709] text-base">Selected Works</h4>

          <Flex className={"justify-between items-center"}>
            <h3 className="text-[#063231] text-[60px] w-95 leading-16.5 -tracking-[1.2px]">
              Our complete project list
            </h3>

            {/* Custom Buttons */}
            <div className="flex gap-x-5 mr-20">
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
          </Flex>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
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
            <Work_card
              workCardImg="/workOne.png"
              workCardTitle="Project One"
              workCardDc="Marketing"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Work_card
              workCardImg="/workTwo.png"
              workCardTitle="Project Two"
              workCardDc="Marketing"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Work_card
              workCardImg="/workThree.png"
              workCardTitle="Project Three"
              workCardDc="Marketing"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Work_card
              workCardImg="/workFour.png"
              workCardTitle="Project Four"
              workCardDc="Marketing"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Selected_works;
