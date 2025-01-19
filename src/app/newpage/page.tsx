import { SanityFetch } from "@/sanity/lib/fetch";
import { IProducts } from "../types/types"
import { allproducts } from "@/sanity/lib/query";


const NewDemo = async () => {
    const data:IProducts[] = await SanityFetch({query : allproducts})
   
  return (
    <div className="grid grid-cols-3">
        {data.map((p) => (
             <div className="flex flex-col gap-6">
                <h2 className="w-full">{p.name}</h2>
                <p>{p.description}</p>
             </div>  
        ))}
    </div>
  )
}

export default NewDemo