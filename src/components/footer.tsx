
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";

import { FaInstagram , FaGithub} from "react-icons/fa";



const data = [
    {
      title:'COMPANY',
      links : ['About','Features','Works','Career'],
  
    },
    {
      title:'HELP',
      links:['Customer Support','Delivery Details','Terms & Conditions','Prvacy Policy']
    },
    {
      title:'FAQ',
      links:['Account','Manage Deliveries','Orders','Payments']
    },
    {
      title:'RESOURCES',
      links:['Free eBooks','Development Tuorials','How-to-Blog' , 'Youtube Playlist']
    }
  ]
const Footer = () => {
  return (
    <div className="">
        <div className="bg-black flex gap-[16px] z-20 flex-col  absolute w-[95%] ml-3 h-[293px] rounded-[20px]">
            <div className="text-white font-bold text-[32px] w-[297px] h-[105px] leading-[35px] ml-5 my-5">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
               
            </div>

            <div className="flex flex-col  gap-[4px]">
                    <div className="flex gap-[4px] rounded-[62px] w-[250px] h-[38px] radius-[62px] px-[16px] py-[12px] bg-white ml-5 ">
                       <div className="w-[20px] h-[20px] text-black"><TfiEmail className="w-[17px] h-[14px] "/></div>
                       <input type="text" placeholder="Enter your email address " className="text-black opacity-[40%] text-[12px] font-medium leading-[18.9px]"/>
                    </div>
                    <div className="flex gap-[4px] rounded-[62px] w-[250px] h-[38px] radius-[62px] px-[16px] py-[11px] bg-white ml-5 ">
                       <div className="mx-auto text-[12px ] mx-auto ">Subscribe to Newsletter</div>
                    </div>
            </div>

        </div>
        <div className="bg-[#f0f0f0] h-[846px] mt-[40px] border pl-2  ">
            <div className="flex flex-col gap-5">

            <div className="  font-bold leading-[34px]  text-[28px] pt-[313px]  mt-[40px]">
                   SHOP.CO
            </div>
            <p className="font-normal opacity-[60px] text-[14px] font-satoshi leading-[20px]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="flex gap-[8px]">
                <div className="bg-white rounded-full px-2 py-2 w-[28px] h-[28px] text-black"><FaTwitter className="w-[13px] h-[13px]"/></div>
                <div className="bg-black rounded-full px-2 py-2 w-[28px] h-[28px] text-white"><CgFacebook className="w-[13px] h-[13px]"/></div>
                <div className="bg-white rounded-full px-2 py-2 w-[28px] h-[28px] text-black"><FaInstagram className="w-[13px] h-[13px]"/></div>
                <div className="bg-white rounded-full px-2 py-2 w-[28px] h-[28px] text-black"><FaGithub className="w-[13px] h-[13px]"/></div>
            </div>
                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((d) => (

                 
<div className="flex flex-col mt-3 gap-[16px]">
 <div className="text-[16px] tracking-[3px] font-medium leading-[18px]">{d.title}</div>
 {d.links.map((l) => (
    <ul className="flex flex-col gap-[10px] ">
      <li className="text-[16px] leading-[19px] font-normal">{l}</li>
    </ul>     
 ))}
</div>
))}

            </div>
            <div className="border-t-2 border-black border-opacity-[10%]">
                   <div className="mt-2 text-center text-[14px] text-black text-[60%] leading-[18.96px]">
                   © 2000-2021, All rights reserved
                   </div>
                   <div className="flex gap-[4px] mt-10 mx-auto">
                    <div className="bg-white w-[24px] h-[24px] mx-auto"><img src="/images/Visa.png" alt="" /></div>
                    <div className="bg-white w-[24px] h-[24px] mx-auto"><img src="/images/MasterCard.png" alt="" /></div>
                    <div className="bg-white w-[24px] h-[24px] mx-auto"><img src="/images/Paypal.png" alt="" /></div>
                    <div className="bg-white w-[24px] h-[24px] mx-auto"><img src="/images/Pay.png" alt="" /></div>
                    <div className="bg-white w-[24px] h-[24px] mx-auto"><img src="/images/G Pay.png" alt="" /></div>

                   </div>
            </div>
        </div>
    </div>
  )
}

export default Footer