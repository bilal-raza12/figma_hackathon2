
import React from 'react'
import { IProducts } from '@/app/types/types'
import { allproducts } from '@/sanity/lib/query'
import { SanityFetch } from '@/sanity/lib/fetch'
interface INewArrival {
    params:Promise<{_id: string}>
}
const NewArrivalDetail = async ({params}:INewArrival) => {
     const data:IProducts[] = await SanityFetch({query : allproducts})
    const product = data.find(async p => p._id === (await params)._id)
  return (
    <div className=''>
        <h1>{product?.name}</h1>
        <h1>{product?.colors}</h1>
    </div>
  )
}

export default NewArrivalDetail