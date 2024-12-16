import Image from "next/image"

const Banner = () => {
  return (
   <div className="bg-black absolute md:static top-[951px] mb-0 sm:mb-[290px] h-[120px] sm:w-full w-[100%] md:flex md:justify-between md:items-center">
    <div className="  md:justify-between flex items-center mt-4 mr-3 md:mr-0 md:mt-0 md:gap-[170px] flex-col md:flex-row ml-[10px] justify-around w-full sm:w-fit sm:ml-[34px] ">
    <div className="hidden md:inline-flex">
   <Image src={"/images/versage.png"} alt="" width={166} height={33} className="w-[116px] h-[23px] md:w-[166px] md:h-[33px]"></Image>
      
      </div>
      <div className="hidden md:inline-flex">
   <Image src={"/images/zara.png"} alt="" width={91} height={38} className="w-[64px] h-[27px] md:w-[91px] md:h-[38px]"></Image>
      
      </div>
      
      <div className="hidden md:inline-flex">
   <Image src={"/images/gucci.png"} alt="" width={151} height={36} className="w-[109px] h-[25px] md:w-[151px] md:h-[36px]"></Image>
      
      </div>
      <div className="hidden md:inline-flex">

   <Image src={"/images/prada.png"} alt="" width={194} height={32} className="w-[127px] h-[21px] md:w-[194px] md:h-[32px]"></Image>
      </div>
      
      
      <div className="hidden md:inline-flex">
   <Image src={"/images/calvien.png"} alt="" width={206} height={33} className="w-[135px] h-[23px] md:w-[206px] md:h-[33px]"></Image>
      
      </div>
      <div className="flex md:hidden justify-evenly gap-6 md:gap-0">

      <div>
   <Image src={"/images/versage.png"} alt="" width={166} height={33} className="w-[116px] h-[23px] md:w-[166px] md:h-[33px]"></Image>
      
      </div>
      <div>
   <Image src={"/images/zara.png"} alt="" width={91} height={38} className="w-[64px] h-[27px] md:w-[91px] md:h-[38px]"></Image>
      
      </div>
      <div>
   <Image src={"/images/gucci.png"} alt="" width={151} height={36} className="w-[109px] h-[25px] md:w-[151px] md:h-[36px]"></Image>
      
      </div>
      </div>

      <div className="flex ml-[23px] md:ml-0 mt-3 md:mt-0 gap-6 md:gap-0 md:hidden">

      <div>
   <Image src={"/images/prada.png"} alt="" width={194} height={32} className="w-[127px] h-[21px] md:w-[194px] md:h-[32px]"></Image>
      
      </div>
      <div>
   <Image src={"/images/calvien.png"} alt="" width={206} height={33} className="w-[135px] h-[23px] md:w-[206px] md:h-[33px]"></Image>
      
      </div>
      </div>

     </div>
     </div>
  )
}

export default Banner