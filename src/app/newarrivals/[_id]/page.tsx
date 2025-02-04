

"use client"
import { useCart } from '@/app/context/cartContext'
import React from 'react'
import { useEffect , useState} from 'react'
import { IProducts } from '@/app/types/types'
import { allproductsdetail } from '@/sanity/lib/query'
import { SanityFetch } from '@/sanity/lib/fetch'
import Link from 'next/link'


interface INewArrival {
    params: Promise<{ _id: string }>
}
 



const NewArrivalDetail =   ({ params }: INewArrival) => {
  const [product, setProduct] = useState<IProducts | null>(null);


    // Resolve the params before using
    useEffect(() => {
      const fetchProduct = async () => {
          const resolvedParams = await params;
          const data: IProducts[] = await SanityFetch({query:allproductsdetail});
          const foundproduct = data.find(p => p._id === resolvedParams._id);
          setProduct(foundproduct || null);
      };

      fetchProduct();
  }, [ params ]);
    const {addToCart} = useCart();
    if(!product) {
      return <div>Product not found</div>
  }
  const handleAddCart = () => {
      addToCart(product)
      alert('Product added to cart')
  }
    // Render the product details
    return (
        <div className='px-3 md:px-0 full'>
          
          <div className='flex md:flex-row flex-col gap-9  mt-[50px] justify-center items-center'>
             <img src={product?.imageurl} alt={product?.name || "Product image"} className='md:w-[350px]  w-[200px] h-full'/>
            <div className='flex flex-col gap-6'>

            <h1 className='font-integralcfbold md:text-2xl text-sm'>{product?.name}</h1>
            <h1 className='font-satoshibold md:text-xl text-sm'>${product?.price}</h1>
            <h1>Description:</h1>
            <p className='md:w-[500px] w-[200px] md:text-sm text-xs'>{product?.description}</p>
            <Link href={"/cart"}>
            <button onClick={handleAddCart} className='bg-black text-white px-5 py-3 rounded-[62px]'>ADD TO CART</button>
            </Link>
            </div>
          </div>
        </div>
    );
}

export default NewArrivalDetail;
