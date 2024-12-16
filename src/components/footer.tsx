import Footer1 from "./footer1"
import { FaTwitter , FaInstagram , FaGithub } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import Image from "next/image";


const footerData = [
  {
    title:'COMPANY',
    links:['About','Features','Work','Career'],
  },
  {
    title:'HELP',
    links:['Customer Support' , 'Delivery Details' , 'Terms & Conditions' , 'Privacy Policy'],
  },
  {
    title:'FAQ',
    links:['Account','Manage Delieveries','Orders','Payments']
  },
  {
    title:'Resources',
    links:['Free eBooks','Development Tutorial','How-To-Blog','Youtube Playlist'],
  }
]
const Footer = () => {
  return (
    <>
  <div  className="absolute md:w-[1280px] md:top-[3850px]">
    <Footer1  />
    </div>
    <div className='w-full bg-black bg-opacity-[10%] h-full mt-[340px] pt-[100px]'>
       <div className="grid md:grid-cols-5 grid-cols-2 mx-[100px] mt-5 justify-between ">
        <div className="flex flex-col gap-[35px] ">
          <div className="flex flex-col gap-[25px] ">
            <h1 className="font-integralcfbold text-[33px] leading-[40px] text-black">SHOP.CO</h1>
            <p className="font-satoshiregular text-[14px] leading-[22px] opacity-[60%] max-w-[240px]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

          </div>
          <div className="flex gap-4 ">
            <div className="w-6 h-6 rounded-full text-center px-2 py-2 bg-white"><FaTwitter className="w-[11px] h-[10px]"/></div>
            <div className="w-6 h-6 rounded-full bg-black px-2 py-3 text-white"><LuFacebook className="w-[12px] h-[12px] "/></div>
            <div className="w-6 h-6 rounded-full bg-white px-2 py-2 "><FaInstagram className="w-[12px]  h-[12px] "/></div>
            <div className="w-6 h-6 rounded-full bg-white px-2 py-2 "><FaGithub className="w-[12px]  h-[12px] "/></div>


          </div>
        </div>
       
       {footerData.map((f) => (
         <div key={f.title} className="flex flex-col justify-between mt-3">
            <h2 className="font-satoshimedium text-[16px] leading-[18px] text-black tracking-[3px]">{f.title}</h2>
            <ul className="flex flex-col gap-[20px]">
              {f.links.map((link) => (
                <li key={link} className="text-[16px] leading-[19px] text-black font-satoshiregular">
                  {link}
                </li>
              ))}
            </ul>
         </div>
       ))}


       </div>
       <div className="mx-[100px] border-b-[1px] border-black mt-6 border-opacity-[60%] pt-[110px]"></div>
       <div className=" flex justify-between mx-[100px] items-center">
        <h2 className="font-satoshiregular pb-5 text-[14px] leading-[18.9px] pt-[110px] opacity-[60%]">Shop.co © 2000-2023, All Rights Reserved</h2>
        <div className="flex gap-[12px] pt-[110px] pb-5">
            <div className="w-[46px] h-[30px] bg-white py-2 px-3"><Image src={"/images/Visa.png"} alt="visa" width={32} height={11}></Image></div>
            <div className="w-[46px] h-[30px] bg-white py-2 px-3"><Image src={"/images/MasterCard.png"} alt="visa" width={32} height={11}></Image></div>
            <div className="w-[46px] h-[30px] bg-white py-2 px-3"><Image src={"/images/PayPal.png"} alt="visa" width={32} height={11}></Image></div>
            <div className="w-[46px] h-[30px] bg-white py-2 px-3"><Image src={"/images/Pay.png"} alt="visa" width={32} height={11}></Image></div>
            <div className="w-[46px] h-[30px] bg-white py-2 px-3"><Image src={"/images/G Pay.png"} alt="visa" width={32} height={11}></Image></div>
        </div>
       </div>

  </div>
    </>
  )
}

export default Footer