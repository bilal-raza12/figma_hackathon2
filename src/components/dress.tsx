import Image from "next/image"

const Dress = () => {
  return (
    <div className="bg-[#f0f0f0] mx-0 md:mx-[100px] mt-28 pt-0 md:pt-2 pb-3 md:pb-5 md:w-auto md:rounded-[40px] rounded-0">
              <h1 className="font-integralcfbold md:mt-[80px] md:ml-[276px] md:text-[48px] max-w-[258px] md:leading-[58px]
               text-[32px] leading-[36px] md:max-w-full mt-[40px] ml-[56px]">BROWSE BY dress STYLE</h1>
              <div className="flex flex-col gap-4 md:ml-[64px] ml-[24px] mt-14">

                {/* 1st */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* casual */}
                  <div className="relative">
                    <Image src={"/images/d1.png"} alt="" width={408} height={290} className="md:w-[408px] md:h-[290px] w-[310px] h-[190px] "></Image>
                    <div className="md:text-[36px] text-2xl md:leading-[48px] font-satoshibold absolute z-20 md:top-[25px] top-[16px] left-[24px] md:left-[36px]">Casual</div>
                  </div>
                  {/* formal */}
                  <div className="relative">
                    <Image src={"/images/d2.png"} alt="" width={684} height={290} className="md:w-[684px] md:h-[290px] w-[310px] h-[190px] "></Image>
                    <div className="md:text-[36px] text-2xl md:leading-[48px] font-satoshibold absolute z-20 md:top-[25px] top-[16px] left-[24px] md:left-[36px]">Formal</div>
                  </div>
                </div>


                {/* 2nd */}
                <div className="flex md:flex-row flex-col gap-6">
                 {/* fashion */}
                  <div className="relative">
                    <Image src={"/images/d3.png"} alt="" width={684} height={290} className="md:w-[684px] md:h-[290px] w-[310px] h-[190px] "></Image>
                    <div className="md:text-[36px] text-2xl md:leading-[48px] font-satoshibold absolute z-20 md:top-[25px] top-[16px] left-[24px] md:left-[36px]">Fashion</div>
                  </div>
                  {/* gym */}
                   
                   <div className="relative">
                    <Image src={"/images/d4.png"} alt="" width={408} height={290} className="md:w-[408px] md:h-[290px] w-[310px] h-[190px] "></Image>
                    
                    <div className="md:text-[36px] text-2xl md:leading-[48px] font-satoshibold absolute z-20 md:top-[25px] top-[16px] left-[24px] md:left-[36px]">Gym</div>
                  </div> 
                  
                </div>
              </div>

    
    </div>
  )
}

export default Dress