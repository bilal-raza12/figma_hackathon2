import React from 'react'
import { IProducts } from '../types/types'

import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
const NewArrivalsPage = async () => {
    const products: IProducts[] = await client.fetch(groq`*[_type == 'product' && isNew]{
             _id,
             name,
             price,
             description,
             "imageurl": image.asset->url


             }`)
  return (
    
    <div className='h-[100vh] z-20'>
        <div className=''>
                <h1 className='text-3xl font-bold text-center my-12'>Casual</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            {products.slice(0,6).map((item) => (
                <div key={item.name} className=' flex flex-col gap-6 border-[1px]'>
                    <Link href={`/casual/${item._id}`}>
                        <div className="">
                            <img className="w-full h-[220px] md:h-[298px]" src={item.imageurl} alt={item.name} />
                            <h2 className='mt-2 text-sm md:text-xl font-bold'>{item.name}</h2>
                            <p className='text-gray-500'>${item.price}</p>
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