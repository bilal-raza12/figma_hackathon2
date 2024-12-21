
import { TfiEmail } from "react-icons/tfi";
// import { FaTwitter } from "react-icons/fa";
// import { CgFacebook } from "react-icons/cg";

// import { FaInstagram , FaGithub} from "react-icons/fa";




const Footer1 = () => {
  return (
   <div className="bg-black static md:w-[1240px] w-[340px] md:mx-[100px] mx-[16px] flex md:flex-row flex-col justify-between rounded-[20px] md:px-[64px] px-6 py-[32px] mt-[55px]">
       <div className="md:max-w-[550px] max-w-[310px] font-integralcfbold md:text-[40px] text-[30px] leading-[36px] md:leading-[48px] text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
       <div className="flex flex-col md:gap-[14px] gap-[10px]">
        <div className="flex md:w-[350px] mt-[15px] w-[300px] py-3 px-4 gap-3 bg-white rounded-[62px]">
          <div className="w-6 h-6"><TfiEmail className="w-[20px] h-[16px] mt-[4px] ml-[2px] text-black opacity-[40%]"/></div>
          <input type="text" placeholder="Enter your email address" className="font-satoshiregular text-[16px] leading-[21.6px] outline-none text-black opacity-[40%]"/>

        </div>

        <div className="px-4 py-3 rounded-[62px] bg-white font-satoshimedium text-center">
             Subscribe to Newsletter
        </div>
       </div>
        
   </div>
  )
}

export default Footer1