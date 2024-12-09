

const Hero = () => {
  return(
    <>
    
    <div className="flex sm:flex-col h-full bg-[#f2f1f0] gap-4">
    <div className="w-full sm:absolute sm:top-[150px] ">
    <img src="/images/herodesktop.png" alt="" className="min-w-full "/>

</div>
        <div className="flex flex-col gap-[10px] mt-5 md:mt-[120px] z-20 ml-[20px] md:ml-[250px]">
            <h1 className="font-bold w-[320px] h-[90px] text-[36px] sm:text-[40px]  leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-black opacity-[60%] leading-[16px] text-[14px] sm:text-[16px] sm:leading-[21.6px] sm:w-[440px] mt-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

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
            <div className="flex flex-col mx-auto mt- sm:hidden">
                    <h1 className="font-bold text-[24px] leading-[30px] sm:hidden">30 000+</h1>
                    <p className="text-black opacity-[60%] font-normal text-[12px] sm:hidden">Happy Custumers</p>
                </div>
                

               <div className="w-full sm:hidden">
            <img src="/images/herodesktop.png" alt="" className="w-full h-[443px] mb-5 hidden md:inline-flex "/>
                <img src="/images/heroMobile.png " alt="" className="mr-9 w-[100%] "/>
               </div>
            
        </div>
        <div className="w-full sm:hidden">
            <img src="/images/herodesktop.png" alt="" className="w-full h-[443px] mb-5 hidden md:inline-flex"/>
                <img src="/images/heroMobile.png " alt="" className="mr-4 w-[100%] "/>
               </div>
               <img src="/images/star.png" alt="" className=" absolute sm:top-[200px] top-[530px] left-[210px] w-[50px] sm:left-[1270px] sm:h-[76px] sm:w-[76px] h-[50px]"/>
               <img src="/images/smallstar.png" alt=""className="absolute top-[680px] left-[20px] w-[40px] h-[40px]" />


    </div>
    </>
  )
}

export default Hero