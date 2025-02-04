"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { FaCheck, FaPlus } from "react-icons/fa";
import { useCart } from '../context/cartContext'
import { RiDeleteBinFill } from 'react-icons/ri'
import { FiMinus } from 'react-icons/fi'
import { client } from '@/sanity/lib/client'

const Checkout = () => {
  const { cartItems, totalPrice , removeFromCart , increaseQuantity , decreaseQuantity} = useCart()
  const [formValues , setFormValues] = useState({
    FirstName: '',
    LastName:'',
    email: '',
    address: '',
    phone: '',
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  }
 


const hanldePlaceOrder = async() => {
  const orderData = {
    _type:"order",
    FirstName:formValues.FirstName,
    LastName: formValues.LastName,
    email: formValues.email,
    address: formValues.address,
    phone: formValues.phone,
    items: cartItems.map((item) => ({

      _type:"reference",
      _ref: item._id,

    }
    )),
    total: totalPrice,
    orderDate: new Date().toISOString(),
    status: "pending",

  };

  try{
    await client.create(orderData)

  }catch(e){
     console.log("Error creating")
     throw e;
  }
}

  return (
    <div className='flex flex-col md:flex-row justify-between md:px-[100px] px-[4px]'>
      
    <div className='flex flex-col md:flex-row  mt-7 '>
         <div className="flex flex-col">
              {cartItems.map((p,i) => (
                                <div key={p.name} className={`flex md:gap-4 gap-[14px] relative pb-6 w-[300px] md:w-[400px] border-opacity-[10%] ${i < 2 ? "border-b-[1px]" : " " }`}>
                                    <div><img src={p.imageurl} alt={p.name} width={124} height={124} className="md:w-[124px] md:h-[124px] w-[99px] h-[99px]"></img></div>
                                    <div className="flex justify-between ">
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-[2px]">
                                                <h1 className="font-satoshibold md:text-[20px] md:leading-[27px] text-[16px] leading-[22px]">{p.name}</h1>
                                                <div className="flex flex-col md:gap-1 gap-[2px]">
                                                    
                                                
                                                </div>
                                            </div>
                                            <div className="font-satoshibold md:text-2xl text-xl">${p.price}</div>
                                        </div>
            
                                        <div className="flex flex-col text-end  items-end justify-between w-fit  md:w-[255px] h-[124px] absolute right-0">
                                            <button  onClick={() => removeFromCart(p._id)} className="w-6 h-6"><RiDeleteBinFill className="w-[18px] text-[#ff3333] h-[19px] mt-[2px] ml-[3px]"/></button>
                                            <div className="flex items-center gap-5 rounded-[62px] bg-[#f0f0f0] md:py-3 md:px-5 px-5 py-[14px] radius-[63px] md:w-[126px] w-[105px] h-[44px] md:mb-0 mb-4">
                                                <button onClick={() => decreaseQuantity(p.id.toString())} className="md:w-5 md:h-5 w-4 h-4 text-black"><FiMinus className="md:w-[15px]  md:mt-[3px] md:ml-[2px] w-[12px] mt-[7px]"/></button>
                                                <span>{p.quantity}</span>
                                                <button  onClick={() => increaseQuantity(p.id.toString())} className="md:w-5 w-4 md:h-5 h-4 "><FaPlus className="md:w-4 md:h-4 mt-[2px] ml-[2px] w-[12px] h-[12px]"/></button>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                             ))}
         </div>
       
    </div>
    <div className="flex flex-col ml-10 max-w-72">
            <h1 className='font-satoshibold text-2xl'>Billing Information</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <Label htmlFor='FirstName' className='font-satoshimedium text-sm'>FirstName:</Label>
                  <Input name='FirstName' value={formValues.FirstName} onChange={handleInputChange} type='text' id='FirstName' className=''/>
                </div>
                <div>
                  <Label htmlFor='LastName' className='font-satoshimedium text-sm'>LastName:</Label>
                  <Input type='text' name='LastName' value={formValues.LastName} onChange={handleInputChange} id='LastName' className=''/>
                </div>
            </div>
            <div >
                <Label htmlFor='email'>Email:</Label>
                <Input type='email' name='email' value={formValues.email} onChange={handleInputChange} id='email' className=''/>
            </div>
            <div>
              <Label htmlFor='phone'>Phone:</Label>
              <Input type='tel' name='phone' value={formValues.phone} onChange={handleInputChange} id='phone' className=''/>
            </div>
            <div>
              <Label htmlFor='address'>Address:</Label>
              <Input type='text' name='address' value={formValues.address} onChange={handleInputChange} id='address' className=''/>
   </div>

  

   {/* billing sec */}
   <div className="flex flex-col gap-5 sm:gap-6 sm:px-6 sm:py-5 py-5 px-5  bg-opacity-[10%] border-[1px] border-opacity-[10%] md:min-w-72 min-w-[200px] rounded-[20px] h-fit">
               <h1 className="font-satoshibold md:text-2xl text-xl">Order Summary</h1>
               <div className="flex flex-col gap-5">
                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular md:text-[20px] md:leading-[27px] ">Subtotal</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px]">${cartItems.reduce((total, item) => total + (Number(item.price) * Number(item.quantity ?? 1)), 0)}</h1>
                   </div>

                   

                  

                   <div className="border-[1px] w-full border-opacity-[10%]"></div>
                   <div className="flex justify-between">
                      <h1 className="font-satoshiregular sm:text-[20px] sm:leading-[27px]">Total</h1>
                      <h1 className="font-satoshibold sm:text-[20px] sm:leading-[27px]">${cartItems.reduce((total, item) => total + (Number(item.price) * Number(item.quantity ?? 1)), 0)}</h1>
                   </div>
               </div>
            </div>

            <div>
    <Button onClick={hanldePlaceOrder} variant={"ghost"} className='w-full bg-black text-white rounded-[62px] mt-7'>Place Your Order</Button>
   </div>




   

            
         </div>
    </div>
  )
}

export default Checkout