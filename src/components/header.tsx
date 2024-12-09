import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex flex-col ">
      <div className="bg-black py-[9px] px-[30px] md:px-0 md:py-0 md:flex md:justify-center md:items-center">
        <p className="text-[10px] md:text-[14px] text-white font-satoshi  md:mx-[544px] font-medium mx-0 md:my-[9px] my-0">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline leading-[16.2px]">Sign Up Now</span>
        </p>
        <div className="w-6 text-white h-6 hidden md:inline-flex">
          <FaTimes className="w-3 h-3 mt-2" />
        </div>
      </div>
      <div className="bg-white">
        <div className="flex  items-center">
          <div className="flex gap-3 md:gap-[50px] mx-2 my-4 md:mx-[200px] md:my-[55px] items-center">
            <div className="w-6 h-6 text-black md:hidden">
              <FaBars className="w-[18px] h-[14px]" />
            </div>
            <div className="font-bold text-[20px] md:text-[32px]  md:leading-[22px]">
              SHOP.CO
            </div>
            <ul className="flex gap-[16px]  items-center hidden sm:inline-flex">
              <div className="flex gap-[4px]">
                <div className="text-[16px] leading-[21.6px] font-normal">
                  Shop
                </div>
                <div className="w-4 h-4 relative">
                  <RiArrowDropDownLine className="w-[14.5px] h-[16.5px] absolute top-[4.25px] left-[2.25px]" />
                </div>
              </div>
              <li className="text-[16px] leading-[21.6px]">On Sale</li>
              <li className="text-[16px] leading-[21.6px]">New Arrivals</li>
              <li className="text-[16px] leading-[21.6px]">Brands</li>
            </ul>
          </div>
          <div className="flex gap-[16px] md:mr-4 md:gap-[16px]">
            <div className="flex px-[16px] py-[12px] md:inline-flex hidden md:bg-[#f0f0f0] w-[577px] h-[48px]">
              <div className=" w-6 h-6 relative">
                <IoIosSearch className="md:w-[20.27px] md:h-[20.27px] absolute top-[1.86px] left-[1.86px] text-black" />
              </div>
              <input
                type="text"
                className="hidden sm:inline-flex bg-transparent outline-none text-[16px]
                       leading-[21.6px]"
                placeholder="Search for products..."
              />
            </div>

            <div className="w-6 h-6 text-black md:hidden">
              <IoIosSearch className="w-[18px] h-[16px]" />
            </div>
           <Link href={"/cart"}> <div className="w-6 h-6 text-black">
              <PiShoppingCartSimpleLight className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"  />
            </div></Link>
            <div className="w-6 h-6 text-black">
              <CgProfile className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] " />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
