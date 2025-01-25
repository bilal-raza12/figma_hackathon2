"use client"
import { useCart } from "../context/cartContext";

import { SlArrowRight } from "react-icons/sl";
import YourCart from '@/components/cart';
const Cart = () => {
  const {cartItems,addToCart , increaseQuantity , removeFromCart , totalPrice , decreaseQuantity} = useCart();
  return (
  
    <div className=' lg:pl-[100px] pl-[16px]'>
      {/* cart url */}
      <div className='flex sm:gap-3 gap-[6px] mt-6 items-center'>
        <div className="flex gap-1 items-center text-black opacity-[60%]">
          <h2 className='font-satoshiregular sm:text-[16px] sm:leading-[22px] text-sm'>Home</h2>
          <div className="md:w-4 md:h-4 w-[14px] h-[14px]"><SlArrowRight className='w-[11px] h-[6px] mt-[5] ml-[5px]'/></div>
        </div>
        <h1 className='font-satoshiregular md:text-[16px] md:leading-[22px] text-sm'>Cart</h1>
      </div>
      <div>

      <YourCart />
      </div>
      
    </div>
    
  )
}

export default Cart
