import Image from "next/image"

const NewArrivals = () => {
  return (
    <div className="pb-8">
        <h1 className="font-integralcfbold relative ml-[45px] bottom-[-270px] sm:ml-[513px] sm:bottom-[230px]  md:text-[48px] text-[32px] leading-[38px] sm:leading-[58px]">New Arrivals</h1>

        <div className="flex justify-between  md:gap-[18px] gap-0 md:ml-[100px] ml-[8px]  absolute top-[1150px]">

            <div className="flex flex-col rounded-[20px] gap-[16px]">

            <div className="">
             <Image className="w-[198px] h-[200px] sm:w-[295px] sm:h-[298px]" src="/images/a1.png" alt="" width={295} height={298} ></Image>
            </div>
            <h1 className="font-satoshibold md:text-[20px] md:leading-[27px] text-[16px] leading-[21px]">T-SHIRT WITH TAPE DETAILS</h1>
            <div className="flex sm:gap-[13px] gap-[11px]">
                  <div className="flex gap-[5px] ">
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/halfstar.png"} alt="" width={9} height={16} className="w-[7px] h-[14px] md:w-[9px] md:h-[16px]"></Image></div>
                  </div>
                  <h1 className="font-satoshiregular md:text-[14px] text-[12px] leading-[16px] sm:leading-[18.9px]">4.5/5</h1>
            </div>
            <h1 className="font-satoshibold md:text-[24px] text-[20px] leading-[27px]  md:leading-[32.4px]">$120</h1>
            
            </div>


            <div className="flex flex-col absolute left-[230px] sm:static rounded-[20px] gap-[16px]">

            <div >
             <Image className="w-[198px] h-[200px] md:w-[295px] md:h-[298px]" src="/images/a2.png" alt="" width={295} height={298}></Image>
            </div>
            <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px] text-[16px] leading-[21.6px]">SKINNY FIT JEANS</h1>
            <div className="flex md:gap-[13px] gap-[11px]">
                  <div className="flex gap-[5px] ">
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                    <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
                   
                    <div><Image src={"/images/halfstar.png"} alt="" width={9} height={16} className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"></Image></div>
                  </div>
                  <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">4.5/5</h1>
            </div>
            <div className="flex gap-[10px] ">
                <h1 className="font-satoshibold sm:text-2xl text-[20px]">$240</h1>
                <h1 className="font-satoshibold sm:text-2xl line-through opacity-[40%] text-[20px]">$260</h1>
                <div className="py-[6px] px-[14px] bg-[#ff3333] bg-opacity-[10%]  rounded-[62px]">
                    <h1 className="font-satoshimedium sm:text-xs text-[10px] text-[#ff3333]">-20%</h1>
                </div>


            </div>
            
            </div>



            {/* 3rd */}
            <div className="flex flex-col rounded-[20px] gap-[16px] hidden sm:inline-flex">

<div >
 <Image className="" src="/images/a31.png" alt="" width={295} height={298}></Image>
</div>
<h1 className="font-satoshibold text-[20px] leading-[27px] ">CHECKERED SHIRT</h1>
<div className="flex gap-[13px]">
      <div className="flex gap-[5px] ">
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/halfstar.png"} alt="" width={9} height={16} ></Image></div>
      </div>
      <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">4.5/5</h1>
</div>
<h1 className="font-satoshibold text-[24px] leading-[32.4px]">$180</h1>

</div>


{/* 4th */}

<div className="flex flex-col rounded-[20px] gap-[16px] hidden sm:inline-flex">

<div >
 <Image className="" src="/images/a4.png" alt="" width={295} height={298}></Image>
</div>
<h1 className="font-satoshibold text-[20px] leading-[27px] ">SLEEVE STRIPED T-SHIRT</h1>
<div className="flex gap-[13px]">
      <div className="flex gap-[5px] ">
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
        <div><Image src={"/images/ratingstar.png"} alt="" width={18} height={18} ></Image></div>
       
        <div><Image src={"/images/halfstar.png"} alt="" width={9} height={16} ></Image></div>
      </div>
      <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">3.5/5</h1>
</div>
<div className="flex gap-[10px] ">
    <h1 className="font-satoshibold text-2xl ">$130</h1>
    <h1 className="font-satoshibold text-2xl line-through opacity-[40%]">$160</h1>
    <div className="py-[6px] px-[14px] bg-[#ff3333] bg-opacity-[10%] rounded-[62px]">
        <h1 className="font-satoshimedium text-xs text-[#ff3333]">-30%</h1>
    </div>


</div>

</div>

      
        </div>
        <button className="py-4 px-[54px] md:w-[218px] w-[320px] md:mt-[290px] mt-[650px] md:ml-[611px] ml-4 font-satoshimedium  rounded-[62px] border-[1px]   bg-black bg-opacity-[10%] text=black">View All</button>
    </div>
  )
}

export default NewArrivals