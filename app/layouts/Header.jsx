import React from 'react'
import Container from '../[components]/Container'
import Flex from '../[components]/Flex'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[#063231]">
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
              <p className="text-white flex items-center gap-x-2">
                <FaPhone /> 2774 518-564-3200
              </p>
            </div>
            {/* Mail  */}
            <div className="">
              <p className="text-white flex items-center gap-x-2">
                <IoMail /> hello@example.com
              </p>
            </div>
          </div>
        </Flex>
        {/* Herder  */}
        <div className="bg-blue-500 mt-5">
          <Flex>
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
                <ul className="flex items-center gap-x-7.5 text-[#063231] text-base uppercase font-semibold">
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
          </Flex>
        </div>
      </Container>
    </div>
  );
}

export default Header

