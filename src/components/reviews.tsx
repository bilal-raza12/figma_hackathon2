import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
const reviewsdata = [
    {
        name:"Sarah M.",
        review:"Iapos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations."
    },
    {
        name:"Alex K.",
        review:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        name:"James L.",
        review:"As someone who is always on the lookout for unique fashion pieces, I@apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
]

const Reviews = () => {
  return (
   <div className="mt-12">

    <div className="flex justify-between md:ml-[100px] ml-4 md:w-[1440px] w-full items-center ">
        <h1 className="font-integralcfbold md:text-[48px] md:leading-[57.6px] text-[32px] leading-[32px]">OUR HAPPY CUSTOMERS</h1>
        <div className="flex gap-3">
            <div className="w-6 h-6"><BiLeftArrowAlt className="w-[16px] h-[19px] "/></div>
            <div className="w-6 h-6"><BiRightArrowAlt className="w-[16px] h-[19px] "/></div>

        </div>
   </div>

   <div className="border-[1px] border-black border-opacity-[10%] ml-4 md:ml-0 md:hidden md:w-[400px] w-[330px]  md:mt-[25px] md:h-[240px] h-[186px] md:px-8 md:py-7 p-6 rounded-[20px] mt-6">
            <div className="flex  flex-col md:max-w-[236px] max-w-[310px]   justify-between ">
                <div className="flex md:gap-6 gap-5 ">
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={20} height={20}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={20} height={20}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={20} height={20}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={20} height={20}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={20} height={20}></Image>

                </div>
                <div className="flex flex-col gap-[12px] mt-3">
                    <div className="flex gap-2">
                        <h1 className="font-satoshibold text-[20px] leading-[22px]">Sarah M.</h1>
                        <div><Image src={"/images/checkbox.png"} alt="" width={20} height={20}></Image></div>
                    </div>
                    <p className="font-satoshiregular w-full md:text-[16px] md:leading-[22px] text-[14px]leading-[20px]">I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.</p>
                </div>
            </div>
        </div>







  <div className="flex gap-[16px] hidden md:inline-flex">

   <div className="w-[400px] h-[240px] border-[1px] absolute left-[-320px] rounded-[20px] mt-[25px]  border-opacity-[10%] px-[32px] py-[28px]">
    <p className="blur-[2px]">

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas id, cupiditate fugiat, sapiente voluptatem repellendus autem magni et fuga enim.
    </p>
   </div>
    
   <div className="flex ml-[100px] gap-12 hidden md:inline-flex">

    {reviewsdata.map((r) => (
        <div key={r.name} className=" border-[1px] border-black border-opacity-[10%] w-[400px]  mt-[25px] h-[240px] px-8 py-7 rounded-[20px]">
            <div className="flex  flex-col max-w-[236px] justify-between">
                <div className="flex gap-6 ">
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>

                </div>
                <div className="flex flex-col gap-[12px] mt-3">
                    <div className="flex gap-2">
                        <h1 className="font-satoshibold text-[20px] leading-[22px]">{r.name}</h1>
                        <div><Image src={"/images/checkbox.png"} alt="" width={20} height={20}></Image></div>
                    </div>
                    <p className="font-satoshiregular w-full text-[16px] leading-[22px]">{r.review}</p>
                </div>
            </div>
        </div>
    ))}
    </div>

    <div className="border-[1px] border-black border-opacity-[10%] hidden md:inline-flex w-[400px] absolute right-[-320px] mt-[25px] h-[240px] px-8 py-7 rounded-[20px]">
            <div className="flex  flex-col max-w-[236px] justify-between blur-[2px]">
                <div className="flex gap-6 ">
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>
                    <Image className="" src={"/images/ratingstar.png"} alt="" width={24} height={24}></Image>

                </div>
                <div className="flex flex-col gap-[12px] mt-3">
                    <div className="flex gap-2">
                        <h1 className="font-satoshibold text-[20px] leading-[22px]">Moo</h1>
                        <div><Image src={"/images/checkbox.png"} alt="" width={20} height={20}></Image></div>
                    </div>
                    <p className="font-satoshiregular w-full text-[16px] leading-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, optio fugit. Modi velit repellendus accusamus temporibus aliquam sit corrupti consequuntur cupiditate?</p>
                </div>
            </div>
        </div>

  </div>
   </div>
  )
}


export default Reviews