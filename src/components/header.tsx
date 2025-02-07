"use client";
import {SignedIn , UserButton} from "@Clerk/nextjs"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import TopHeader from "./topHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState(false);

  const toggleCategory = () => {
    setCategory(!category);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>
        <TopHeader />
        {/* menu bar for mobile */}

        <div className="sm:flex sm:flex-col bg-white">
          <div className="flex sm:items-center  sm:mt-[24px] lg:ml-5 xl:ml-[50px] lg:w-auto xl:w-[1240px]  sm:gap-[40px] h-[48px]   sm:justify-evenly  ">
            {/* menu bar for mobile */}
            {!isMenuOpen && (
              <div
                onClick={() => toggleMenu()}
                className="w-6 h-6 md:hidden mt-[16px] ml-[16px] "
              >
                <FaBars className="w-[18.75px] h-[14.25px] mt-[4.88px] ml-[2.63px]" />
              </div>
            )}

            {/* logo */}

            <h1 className="font-integralcfbold mt-[10px] sm:mt-0 leading-[30.24px]  sm:text-[32px]  sm:leading-[21.6px] text-[25.2px] sm:mb-2  ml-[16px] sm:ml-0">
              SHOP.CO
            </h1>

            {/* nav links */}
            <ul className="flex gap-[24px]  items-center hidden sm:inline-flex">
              <div
                onClick={() => setCategory(!category)}
                className="flex gap-[4px] items-center"
              >
                <div className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                  Shop{" "}
                </div>
                <div className="w-[16px] h-[16px]">
                  <MdKeyboardArrowDown className="mt-[] w-[18px] h-[16px]" />
                </div>
              </div>
              {category && (
                  <div className="flex gap-4 items-center">
                    <Link href={"/casual"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Casual
                      </div>
                    </Link>
                    <Link href={"/formal"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Formal
                      </div>
                    </Link>
                    <Link href={"/fashion"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Fashion
                      </div>
                    </Link>
                    <Link href={"/gym"}>
                      {" "}
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Gym
                      </div>
                    </Link>
                  </div>
                )}

              <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                On Sale
              </li>
              <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                New Arrivals
              </li>
              <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                Brands
              </li>
            </ul>

            {/* mobile  icons */}
            <div className="flex md:hidden gap-[12px] mt-[20px] ml-[40px]">
              <div className="w-6 h-6 ">
                <IoIosSearch className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]" />
              </div>
              <Link href={"/cart"}>
                <div className="w-6 h-6 ">
                  <PiShoppingCartSimpleLight className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]" />
                </div>
              </Link>
              <div className="w-6 h-6 ">
                <CgProfile className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]" />
              </div>
            </div>
            {/* search bar desktop */}

            {/* functional icons */}
            <div className="flex gap-[14px] hidden sm:inline-flex">
              <Link href={"/cart"}>
                <div className="w-6 h-6">
                  <PiShoppingCartSimpleLight className="w-[22.13px] h-[20.25] mt-[1.88px]" />
                </div>
              </Link>
              <div className="w-6 h-6">
                <CgProfile className="w-[22.13px] h-[20.25] mt-[1.88px]" />
              </div>
              <SignedIn>
         <UserButton />
       </SignedIn>
            </div>
          </div>
          {/* <div className="border-black border-[1px] border-opacity-[10%] mt-6 hidden sm:block ml-[100px]"></div> */}
        </div>

        {isMenuOpen && (
          <div className="flex justify-between py-[40px]">
            <div className="bg-white w-[230px] h-full z-30 ">
              <ul className="flex flex-col space-y-5 items-center">
                <div onClick={() => toggleCategory()} className="flex gap-4 ">
                  <div className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                    Shop{" "}
                  </div>
                  <div className="w-[16px] h-[16px]">
                    <MdKeyboardArrowDown className="mt-[] w-[18px] h-[16px]" />
                  </div>
                </div>
                {category && (
                  <div className="flex gap-4 items-center">
                    <Link href={"/casual"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Casual
                      </div>
                    </Link>
                    <Link href={"/formal"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Formal
                      </div>
                    </Link>
                    <Link href={"/fashion"}>
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Fashion
                      </div>
                    </Link>
                    <Link href={"/gym"}>
                      {" "}
                      <div className="font-satoshimedium text-sm border-r-[1px] border-black px-2">
                        Gym
                      </div>
                    </Link>
                  </div>
                )}
                <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                  On Sale
                </li>
                <Link href={"/newarrivals"}>
                  <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                    New Arrivals
                  </li>
                </Link>
                <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">
                  Brands
                </li>
              </ul>
            </div>
            <div
              onClick={() => toggleMenu()}
              className="bg-white w-[50px] h-[20px] rounded-full z-30 "
            >
              <div className=" text-sm">
                <FaTimes className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
