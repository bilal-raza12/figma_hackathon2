

const Hero = () => {
  return(
    <>
    
    <div className="bg-[#f2f0f1] flex flex-col h-full">
        <div className="flex flex-col gap-[10px] mt-5 ml-[20px]">
            <h1 className="font-bold w-[290px] h-[90px] text-[36px] leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-black opacity-[60%] leading-[16px] text-[14px] mt-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

            <button className="bg-black w-[250px] rounded-[62px] text-white py-4 px-[54px] mt-4">Shop Now</button>

            <div className="sm:hidden  flex justify-between w-[230px] mx-auto mt-3 ">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[24px] leading-[30px]">200+</h1>
                    <p className="text-black opacity-[60%] font-normal text-[12px]">International Brands</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-[24px] leading-[30px]">2000+</h1>
                    <p className="text-black opacity-[60%] font-normal text-[12px]">International Brands</p>
                </div>
               
            </div>
            <div className="flex flex-col mx-auto mt-2">
                    <h1 className="font-bold text-[24px] leading-[30px] sm:hidden">30 000+</h1>
                    <p className="text-black opacity-[60%] font-normal text-[12px] sm:hidden">Happy Custumers</p>
                </div>
               <div className="w-[3px]">
                <img src="/images/heroMobile.png " alt="" className="mr-4 w-[320px] "/>
               </div>

            
            
        </div>
        <div className="w-full sm:hidden">
                <img src="/images/heroMobile.png " alt="" className="mr-4 w-[100%] sm:hidden"/>
               </div>
               <img src="/images/star.png" alt="" className=" absolute top-[530px] left-[210px] w-[50px] h-[50px]"/>
               <img src="/images/smallstar.png" alt=""className="absolute top-[450px] left-[] w-[25px] h-[25px]" />


    </div>
    </>
  )
}

export default Hero