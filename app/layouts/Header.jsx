import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import Button from '../[components]/Button';


const Header = () => {
  return (
    <div className="fixed  z-50 w-full font-poppins ">
      {/* HeaderTop  */}
      <Container>
        <Flex className={"py-2 justify-between text-[18px]"}>
          {/* Location  */}
          <div className="">
            <p className="text-white flex items-center gap-x-2">
              <FaLocationDot /> 2774 Oak Drive, Plattsburgh, New York
            </p>
          </div>
          {/* Phone & Mail Flex  */}
          <div className="flex gap-x-17.75">
            {/* Phone  */}
            <div className="">
              <p className="text-white  flex items-center gap-x-2">
                <FaPhone /> 2774 518-564-3200
              </p>
            </div>
            {/* Mail  */}
            <div className="">
              <p className="text-white  flex items-center gap-x-2">
                <IoMail /> hello@example.com
              </p>
            </div>
          </div>
        </Flex>
        {/* Herder  */}
        <div className="bg-white rounded-[20px] mt-5 p-3.75">
          <Flex className={"justify-between"}>
            {/* Logo & Menu Flex  */}
            <div className="flex items-center gap-x-15">
              {/* Logo */}
              <div className="">
                <Image
                  src="/logo.png"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                />
              </div>
              {/* Menu */}
              <nav>
                <ul className="flex items-center font-poppins gap-x-7.5 text-[#063231] text-base uppercase font-semibold">
                  <li>
                    <Link href={"/"} className="flex items-center">
                      Home <IoMdArrowDropdown />
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/"} className="flex items-center">
                      Page <IoMdArrowDropdown />
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/"} className="flex items-center">
                      Portfolio <IoMdArrowDropdown />
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/"} className="flex items-center">
                      Blog <IoMdArrowDropdown />
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/"} className="flex items-center">
                      Contact
                    </Link>{" "}
                  </li>
                </ul>
              </nav>
            </div>
            <Button btnTxt={"lets get in touch"} />
          </Flex>
        </div>
      </Container>
    </div>
  );
}

export default Header

