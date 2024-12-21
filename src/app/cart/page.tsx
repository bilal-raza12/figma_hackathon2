


import { SlArrowRight } from "react-icons/sl";
import YourCart from '@/components/cart';
const Cart = () => {
  return (
    <div className=' pl-[100px]'>
      {/* cart url */}
      <div className='flex gap-3 mt-6 items-center'>
        <div className="flex gap-1 items-center text-black opacity-[60%]">
          <h2 className='font-satoshiregular text-[16px] leading-[22px]'>Home</h2>
          <div className="w-4 h-4"><SlArrowRight className='w-[11px] h-[6px] mt-[8] ml-[5px]'/></div>
        </div>
        <h1 className='font-satoshiregular text-[16px] leading-[22px]'>Cart</h1>
      </div>
      <div>

      <YourCart />
      </div>
      
    </div>
    
  )
}

export default Cart
