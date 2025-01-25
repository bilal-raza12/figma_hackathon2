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
    <div className=" relative z-60 h-auto   ">
  <div  className="absolute md:w-[1040px] md:top-[-90px] top-[90px]">
    <Footer1  />
    </div>
    
    <div className='w-full bg-black bg-opacity-[10%] mt-[340px] h-full  pt-[100px] md:pl-[50px] pl-4 pb-20 '>
       <div className="flex md:flex-row flex-col md:gap-[100px] gap-4 w-full h-auto md:mt-7 mt-0">
        {/* about */}
        <div className="flex flex-col md:gap-[35px] md:w-[248px] gap-[25px] w-[320px]">
          <div className="flex flex-col md:gap-[25px] gap-2 ">
            <h1 className="font-integralcfbold md:text-[33px] md:leading-[40px] text-[29px] leading-[35px]">SHOP.CO</h1>
            <p className="text-black opacity-[60%] font-satoshiregular text-[14px] md:leading-[22px] leading-[20px] max-w-[320px] md:max-w-[248px]">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
          </div>
          {/* social media icons */}
          <div className="flex max-w-[148px] justify-between ">
             <div className="w-7 h-7 rounded-full bg-white"><FaTwitter className="w-3 h-3 mt-2 ml-2"/></div>
             <div className="w-7 h-7 rounded-full bg-black"><LuFacebook className="w-3 h-3 mt-2 ml-2 text-white"/></div>
             <div className="w-7 h-7 rounded-full bg-white"><FaInstagram className="w-3 h-3 mt-2 ml-2"/></div>
             <div className="w-7 h-7 rounded-full bg-white"><FaGithub className="w-3 h-3 mt-2 ml-2"/></div>
          
          </div>
        </div>

        {/* links grid*/}
        <div className="grid md:grid-cols-4 grid-cols-2 md:w-[744px] w-full md:gap-[248px] gap-6">
          {footerData.map((f) => (
            <div key={f.title} className="flex flex-col gap-[26px] w-[177px]">
              <h1 className="font-satoshimedium text-[16px] leading-[18px] tracking-[3px]">{f.title}</h1>
              {f.links.map((l) => (

              
              <ul key={l} className="flex flex-col gap-6">
              <li  className="text-[16px] leading-[19px] text-black opacity-[60%] font-satoshiregular">{l}</li>
              </ul>
              ))}
            </div>
          ))}
          </div>        
        
           
       </div>


       <div className="md:w-[1240px] w-[320px]  border-[1px] border-black border-opacity-[10%] mt-[60px]"></div>
       <div className="w-[1240px]  md:flex-row flex flex-col justify-between mt-6 ml-8 md:ml-0">
            <h3 className="font-satoshiregular text-[14px] leading-[19px] opacity-[60%]">Shop.co © 2000-2023, All Rights Reserved</h3>
            <div className="flex sm:gap-[12px] gap-[10px] ml-[23px] md:ml-0 md:mt-0 mt-4">
              <div className="bg-white md:w-[47px] md:h-[30px] w-[40px] h-[26px]"><Image src={"/images/Visa.png"} alt="" width={32} height={10} className="md:mt-[10px] md:ml-[7px] md:w-[32px] md:h-[10px] w-[28px] h-[9px] mt-[8] ml-[6px] "></Image></div>
              <div className="bg-white md:w-[47px] md:h-[30px] w-[40px] h-[26px]"><Image src={"/images/MasterCard.png"} alt="" width={25} height={16} className="md:mt-[7px] md:ml-[10px] md:w-[25px] md:h-4 w-[22px] h-[13px] mt-[6] ml-[9px] "></Image></div>
              <div className="bg-white md:w-[47px] md:h-[30px] w-[40px] h-[26px]"><Image src={"/images/PayPal.png"} alt="" width={34} height={9} className="md:mt-[11px] md:ml-[6px] md:w-[34px] md:h-[9px] w-[30px] h-[8px] mt-[9px] ml-[5px] "></Image></div>
              <div className="bg-white md:w-[47px] md:h-[30px] w-[40px] h-[26px]"><Image src={"/images/Pay.png"} alt="" width={26} height={11} className="md:mt-[10px] md:ml-[10px] md:w-[26px] md:h-[11px] w-[23px] h-[10px] mt-[8px] ml-[9px]"></Image></div>
              <div className="bg-white md:w-[47px] md:h-[30px] w-[40px] h-[26px]"><Image src={"/images/G Pay.png"} alt="" width={28} height={11} className="md:mt-[10px] md:ml-[9px] md:w-7 md:h-[11px] w-6 h-[10px] mt-2 ml-2"></Image></div>
            </div>
       </div>
         
  </div>
    </div>
  )
}

export default Footer