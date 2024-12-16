import Image from "next/image";

const TopSelling = () => {
  return (
    <div className="mt-[40px]  ">
      <div className="border-[1px] md:mx-[100px] w-full md:w-auto mx-[16px]"></div>

      <h1 className="font-integralcfbold md:text-5xl  text-[32px] leading-[38px] md:leading-[58px] mt-12 text-center">
        Top Selling
      </h1>
      <div className="md:ml-[100px] ml-3 flex  md:gap-[24px] gap-[12px] w-fit mt-8">
        {/* 1st */}
        <div className="flex flex-col rounded-[20px] gap-[16px]">
          <div>
            <Image
              className="w-[198px] h-[200px] md:w-[295px] md:h-[298px]"
              src="/images/t1.png"
              alt=""
              width={295}
              height={298}
            ></Image>
          </div>
          <h1 className="font-satoshibold md:text-[20px] leading-[21.6px] text-[14px] md:leading-[27px] ">
            VERTICAL STRIPED SHIRT
          </h1>
          <div className="flex md:gap-[13px] gap-[10px]">
            <div className="flex gap-[5px] ">
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>

              <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">
                5.0/5
              </h1>
            </div>
          </div>
          <div className="flex gap-[10px] ">
            <h1 className="font-satoshibold text-2xl ">$212</h1>
            <h1 className="font-satoshibold text-2xl line-through opacity-[40%]">
              $232
            </h1>
            <div className="py-[6px] px-[14px] bg-[#ff3333] bg-opacity-[10%] rounded-[62px]">
              <h1 className="font-satoshimedium text-xs text-[#ff3333]">
                -20%
              </h1>
            </div>
          </div>
        </div>




        {/* 2nd */}
        <div className="flex flex-col rounded-[20px] gap-[16px]">
          <div>
            <Image
              className="w-[198px] h-[200px] md:w-[295px] md:h-[298px]"
              src="/images/t2.png"
              alt=""
              width={295}
              height={298}
            ></Image>
          </div>
          <h1 className="font-satoshibold md:text-[20px] md:leading-[27px] text-[12px] leading-[21.6px]">
          COURAGE GRAPHIC T-SHIRT
          </h1>
          <div className="flex md:gap-[13px] gap-[11px] ">
            <div className="flex gap-[5px] ">
              <div>
                <Image
                className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              
              <div>
                <Image className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>

              <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">
                4.0/5
              </h1>
            </div>
          </div>
         
          <h1 className="font-satoshibold text-[24px] leading-[32.4px]">$145</h1>

</div>
        

        {/* 3rd */}
        <div className="flex flex-col rounded-[20px] gap-[16px] hidden md:inline-flex">
          <div>
            <Image
              className=""
              src="/images/t3.png"
              alt=""
              width={295}
              height={298}
            ></Image>
          </div>
          <h1 className="font-satoshibold text-[20px] leading-[27px] ">
          LOOSE FIT BERMUDA SHORTS
          </h1>
          <div className="flex gap-[13px]">
            <div className="flex gap-[5px] ">
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              
              
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>

              <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">
                3.0/5
              </h1>
            </div>
          </div>
         
          <h1 className="font-satoshibold text-[24px] leading-[32.4px]">$80</h1>

</div>
        
        {/* 4th */}
      
        <div className="flex flex-col rounded-[20px] gap-[16px] hidden md:inline-flex">
          <div>
            <Image
              className=""
              src="/images/t4.png"
              alt=""
              width={295}
              height={298}
            ></Image>
          </div>
          <h1 className="font-satoshibold text-[20px] leading-[27px] ">
          FADED SKINNY JEANS
          </h1>
          <div className="flex gap-[13px]">
            <div className="flex gap-[5px] ">
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/images/ratingstar.png"}
                  alt=""
                  width={18}
                  height={18}
                ></Image>
              </div>
              <div><Image src={"/images/halfstar.png"} alt="" width={9} height={16} ></Image></div>
      </div>

              <h1 className="font-satoshiregular text-[14px] leading-[18.9px]">
                4.5/5
              </h1>
            </div>
         
          <h1 className="font-satoshibold text-[24px] leading-[32.4px]">$210</h1>
          </div>

</div>


<button className="py-4 px-[54px] md:w-[218px] w-[320px] md:mt-[40px] mt-[50px] md:ml-[611px] ml-4 font-satoshimedium  rounded-[62px] border-[1px]   bg-black bg-opacity-[10%] text=black">View All</button>





</div> 

        
      
      
      
      
      
      
    
  );
};

export default TopSelling;
