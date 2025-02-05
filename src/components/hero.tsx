
import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return(
<div className="flex flex-col sm:mt-0  sm:flex-row bg-[#f2f0f1] w-full justify-between h-[100vh] overflow-hidden ">
  {/* left */}
  <div className="md:max-w-[560px] sm:max-w-[315px] flex flex-col lg:ml-[50px] ml-[16px] mt-[30px] sm:mt-[120px] sm:gap-8 gap-6">
    <div className="font-integralcfbold sm:text-[64px] sm:leading-[64px] text-[36px] leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
    <p className="font-satoshiregular sm:text-[16px] md:leading-[22px] text-[12px] w-[320px] sm:w-full leading-[20px] opacity-[60%]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <Link href={"#new-arrivals"}>
    <button  className="md:max-w-[278px] max-w-[320px] px-[54px] py-4 bg-black rounded-[62px] text-white">Shop Now</button>
    </Link>

  </div>

  {/* mobilecount */}


 

    {/* mobile heroimage */}
    <div className="mb-9 sm:hidden absolute top-[500px]">
      <Image src={"/images/heroMobile.png"} alt="" width={200} height={200} className="w-full h-[450px] "/>
    </div>
    <div className="absolute  w-[104px] top-[543px] left-[265px] h-[104px] sm:hidden ">
    <Image src={"/images/star.png"} alt="star" width={76} height={76} className="w-[76px] h-[76px]"></Image>
  </div>
  <div className="absolute   top-[640px] left-[27px]  sm:hidden">
    <Image src={"/images/star.png"} alt="star" width={44} height={44} className="w-[44px] h-[44px]"></Image>
  </div>

 

  {/* right desktop*/}
  <div>
    <Image src={"/images/heroimage3.jpeg"} alt="" width={200} height={200} className="w-[700px] hidden sm:inline-flex mb-[30px] h-full mr-[40px]"></Image>
  </div>
  <div className="absolute  lg:left-[1100px] w-[104px] top-[220px] h-[104px] hidden sm:inline-flex">
    <Image src={"/images/star.png"} alt="star" width={104} height={104} className="hidden sm:inline-flex"></Image>
  </div>
  <div className="absolute left-[630px] w-[56px] top-[470px] h-[56px] hidden sm:inline-flex">
    <Image src={"/images/star.png"} alt="star" width={56} height={56} className="hidden sm:inline-flex"></Image>
  </div>
  
  </div>
    
  )
}

export default Hero