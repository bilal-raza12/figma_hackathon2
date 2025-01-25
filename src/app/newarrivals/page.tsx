import React from 'react'
import { IProducts } from '../types/types'
import { allproductsdetail } from '@/sanity/lib/query'
import { SanityFetch } from '@/sanity/lib/fetch'
import Link from 'next/link'
const NewArrivalsPage = async () => {
    const products: IProducts[] = await SanityFetch({query:allproductsdetail})
  return (
    
    <div className='h-[100vh] z-20'>
        <div className=''>
                <h1 className='text-3xl font-bold text-center my-12'>New Arrivals</h1>
        <div className='grid grid-cols-3 gap-4'>
            {products.slice(0,6).map((item) => (
                <div key={item.name} className=' flex flex-col gap-6'>
                    <Link href={`/newarrivals/${item._id}`}>
                        <div className="">
                            <img className='w-[295px] h-[298px]' src={item.imageurl} alt={item.name} />
                            <h2 className='mt-2 text-xl font-bold'>{item.name}</h2>
                            <p className='text-gray-500'>{item.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
      </div>

        </div>
       

    
  )
}

export default NewArrivalsPage