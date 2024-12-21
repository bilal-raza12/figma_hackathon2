
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

interface IProduct {
    ImageURL : string;
    name: string;
    size: string;
    color: string;
    price: number;

}


const ProductData : IProduct[] = [
   {
    ImageURL: "/images/c1.png",
    name : "Gradient Graphic T-shirt",
    size: "Large",
    color:"White",
    price: 145,

   },

   {
    ImageURL: "/images/c2.png",
    name : "Checkered Shirt",
    size: "Medium",
    color:"Red",
    price: 180,

   },
   {
    ImageURL: "/images/c3.png",
    name : "Skiny Fit Jeans",
    size: "Large",
    color:"Blue",
    price: 240,

   },


]

const YourCart = () => {
   
  return (
    <div className='mt-7'>
        <h1 className='font-integralcfbold md:text-[40px] md:leading-[48px] text-[32px] leading-[38px]'>YOUR CART</h1>
        <div className="flex gap-5 mt-6 flex-col md:flex-row">
            {/* product section */}
            <div className='md:w-[708px] w-[330px] bg-opacity-[10%] flex flex-col  border-[1px] border-black border-opacity-[10%] rounded-[20px] md:py-5 md:px-6 py-[14px] px-[14px] md:gap-6 gap-4'>
                 {ProductData.map((p,i) => (
                    <div key={p.name} className={`flex md:gap-4 gap-[14px] relative pb-6 border-opacity-[10%] ${i < 2 ? "border-b-[1px]" : " " }`}>
                        <div><Image src={p.ImageURL} alt={p.name} width={124} height={124} className="md:w-[124px] md:h-[124px] w-[99px] h-[99px]"></Image></div>
                        <div className="flex justify-between ">
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-[2px]">
                                    <h1 className="font-satoshibold md:text-[20px] md:leading-[27px] text-[16px] leading-[22px]">{p.name}</h1>
                                    <div className="flex flex-col md:gap-1 gap-[2px]">
                                        <div className="font-satoshiregular md:text-[14px] md:leading-[19px] text-xs">
                                           Size: <span className="opacity-[60%]">{p.size}</span>
                                               
                                        </div>
                                        <div className="font-satoshiregular md:text-[14px] md:leading-[19px] text-xs">
                                           Color: <span className="opacity-[60%]">{p.color}</span>
                                               
                                        </div>
                                    </div>
                                </div>
                                <div className="font-satoshibold md:text-2xl text-xl">${p.price}</div>
                            </div>

                            <div className="flex flex-col text-end  items-end justify-between w-fit  md:w-[255px] h-[124px] absolute right-0">
                                <div className="w-6 h-6"><RiDeleteBinFill className="w-[18px] text-[#ff3333] h-[19px] mt-[2px] ml-[3px]"/></div>
                                <div className="flex items-center gap-5 rounded-[62px] bg-[#f0f0f0] md:py-3 md:px-5 px-5 py-[14px] radius-[63px] md:w-[126px] w-[105px] h-[44px] md:mb-0 mb-4">
                                    <div className="md:w-5 md:h-5 w-4 h-4 text-black"><FiMinus className="md:w-[15px]  md:mt-[3px] md:ml-[2px] w-[12px] mt-[7px]"/></div>
                                    <span>1</span>
                                    <div  className="md:w-5 w-4 md:h-5 h-4 "><FaPlus className="md:w-4 md:h-4 mt-[2px] ml-[2px] w-[12px] h-[12px]"/></div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                 ))}
            </div>


            {/* items bill */}
            <div className="flex flex-col gap-5 sm:gap-6 sm:px-6 sm:py-5 py-5 px-5  bg-opacity-[10%] border-[1px] border-opacity-[10%] md:min-w-[505px] min-w-[330px] rounded-[20px] h-fit">
               <h1 className="font-satoshibold md:text-2xl text-xl">Order Summary</h1>
               <div className="flex flex-col gap-5">
                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular md:text-[20px] md:leading-[27px] ">Subtotal</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px]">$565</h1>
                   </div>

                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular sm:text-[20px] sm:leading-[27px]">Discount (-20%)</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px] text-[#ff3333]">-$113</h1>
                   </div>

                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular sm:text-[20px] sm:leading-[27px]">Delivery Fee</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px]">$15</h1>
                   </div>

                   <div className="border-[1px] w-full border-opacity-[10%]"></div>
                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular sm:text-[20px] sm:leading-[27px]">Total</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px]">$467</h1>
                   </div>
               </div>

               <div className="flex gap-3 ">
                {/* promo code */}
                <div className="flex py-3 px-4 md:gap-3 gap-[10px] bg-[#f0f0f0] rounded-[62px] md:w-[362px] w-[200px]">
                    <div className="md:w-6 md:h-6 w-5 h-5"><Image src={"/images/token.png"} alt=" " width={21} height={21} className="md:w-[21px] md:h-[21px] w-[17px] h-[17px]"></Image></div>
                    <h1 className="md:text-[16px] md:leading-[22px] text-[14px] leading-[19px] font-satoshiregular opacity-[40%]">Add promo code</h1>
                
                </div>

                {/* promo code button */}
                <button className="bg-black py-3 px-4 rounded-[62px] md:w-[119px] w-[90px] text-white">Apply</button>
               </div>


               {/* checkout button */}
               <div className="flex text-white gap-3 py-4 px-[54px] bg-black rounded-[62px] justify-center md:w-[457px] w-[300px]">
                   <h1 className="font-satoshimedium ">Go To Checkout</h1>
                   <div className="w-6 h-6 text-white"><FiArrowRight className="w-[16px] h-[19px] mt-[4px]"/></div>
               </div>
            </div>
        </div>

    </div>
  )
}

export default YourCart