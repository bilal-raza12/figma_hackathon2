"use client";
import { useState } from "react";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";


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
    const [items , setItems] = useState<number>(1);
  return (
    <div className='mt-7'>
        <h1 className='font-integralcfbold text-[40px] leading-[48px]'>YOUR CART</h1>
        <div className="flex gap-5 mt-6">
            {/* product section */}
            <div className='w-[708px] flex flex-col  border-[1px] border-black border-opacity-[10%] rounded-[20px] py-5 px-6 gap-6 '>
                 {ProductData.map((p,i) => (
                    <div key={p.name} className={`flex gap-4 relative pb-6 border-opacity-[10%] ${i < 2 ? "border-b-[1px]" : " " }`}>
                        <div><Image src={p.ImageURL} alt={p.name} width={124} height={124}></Image></div>
                        <div className="flex justify-between ">
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-[2px]">
                                    <h1 className="font-satoshibold text-[20px] leading-[27px]">{p.name}</h1>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-satoshiregular text-[14px] leading-[19px]">
                                           Size: <span className="opacity-[60%]">{p.size}</span>
                                               
                                        </div>
                                        <div className="font-satoshiregular text-[14px] leading-[19px]">
                                           Size: <span className="opacity-[60%]">{p.color}</span>
                                               
                                        </div>
                                    </div>
                                </div>
                                <div className="font-satoshibold text-2xl">${p.price}</div>
                            </div>

                            <div className="flex flex-col text-end  items-end justify-between  w-[255px] h-[124px] absolute right-0">
                                <div className="w-6 h-6"><RiDeleteBinFill className="w-[18px] text-[#ff3333] h-[19px] mt-[2px] ml-[3px]"/></div>
                                <div className="flex items-center gap-5 rounded-[62px] bg-[#f0f0f0] py-3 px-5 radius-[63px] w-[126px] h-[44px]">
                                    <div className="w-5 h-5 text-black"><FiMinus className="w-[15px]  mt-[3px] ml-[2px] "/></div>
                                    <span>{items}</span>
                                    <div  className="w-5 h-5 "><FaPlus className="w-4 h-4 mt-[2px] ml-[2px]"/></div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>

    </div>
  )
}

export default YourCart