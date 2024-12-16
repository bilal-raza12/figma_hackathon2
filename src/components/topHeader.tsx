import { FaTimes } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full h-[38px] bg-black flex items-center justify-between">
      {/* topheader */}
      <div className=" mx-auto  bg-black text-white  ">
        <div className="font-satoshiregular sm:text-[14px] text-[12px] sm:leading-[18.9px] leading-[16.2px]">Sign up and get 20% off to your first order. <span className="underline font-satoshimedium">Sign Up Now</span></div>      
      </div>
      <div className="w-[20px] h-[20px] text-white mr-[100px] hidden sm:block">
        <FaTimes className="w-[13.13px] h-[13.13px] mt-[3.43px] ml-[3.44px]"/>
      </div>
    </div>
  );
};

export default TopHeader;
