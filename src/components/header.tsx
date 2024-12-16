import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa"; 


const Header = () => {
  return (
    <div className="sm:flex sm:flex-col ">
        <div className="flex sm:items-center  sm:mt-[24px] sm:ml-[100px] sm:w-[1240px] sm:gap-[40px] h-[48px]   sm:justify-evenly  ">

            

            
     {/* menu bar for mobile */}
     <div className="w-6 h-6 md:hidden mt-[16px] ml-[16px] "><FaBars className="w-[18.75px] h-[14.25px] mt-[4.88px] ml-[2.63px]"/></div>
    
          {/* logo */}
          
             <h1 className="font-integralcfbold mt-[10px] sm:mt-0 leading-[30.24px]  sm:text-[32px]  sm:leading-[21.6px] text-[25.2px] sm:mb-2  ml-[16px] sm:ml-0">SHOP.CO</h1>
            
        
          {/* nav links */}
          <ul className="flex gap-[24px]  items-center hidden sm:inline-flex">
            <div className="flex gap-[4px] items-center">

                <div className="font-satoshiregular text-[16px] leading-[21.6px]  ">Shop </div>
                <div className="w-[16px] h-[16px]"><MdKeyboardArrowDown className="mt-[] w-[18px] h-[16px]"/></div>
            </div>
                <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">On Sale</li>
                <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">New Arrivals</li>
                <li className="font-satoshiregular text-[16px] leading-[21.6px]  ">Brands</li>
                

             </ul>
          
          {/* mobile  icons */}
          <div className="flex md:hidden gap-[12px] mt-[20px] ml-[40px]">

             <div className="w-6 h-6 "><IoIosSearch className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]"/></div>
             <div className="w-6 h-6 "><PiShoppingCartSimpleLight className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]"/></div>
             <div className="w-6 h-6 "><CgProfile className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]"/></div>
          </div>
             {/* search bar desktop */}
                <div className="hidden sm:inline-flex flex gap-[12px] bg-[#f0f0f0] py-[12px] px-[16px] w-[577px] h-[48px] rounded-[62px] text-[black opacity-[40%]]">
                    <div className="w-6 h-6"><IoIosSearch className="w-[20.27px] h-[20.27px] mt-[1.86px] ml-[1.86px]"/></div>
                    <input type="text" className="bg-transparent text-[16px] leading-[21.6px] font-satoshiregular outline-none" placeholder="Search for products..."/>
                </div>

                {/* functional icons */}
             <div className="flex gap-[14px] hidden sm:inline-flex">
                <div className="w-6 h-6"><PiShoppingCartSimpleLight className="w-[22.13px] h-[20.25] mt-[1.88px]"/></div>
                <div className="w-6 h-6"><CgProfile className="w-[22.13px] h-[20.25] mt-[1.88px]"/></div>
             </div>
            
            
        </div>
        <div className="border-black border-[1px] border-opacity-[10%] mt-6 w-[1240px] hidden sm:block ml-[100px]"></div>
        </div>
  )
}

export default Header