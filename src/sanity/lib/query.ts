import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
      *[_type == "product" && isNew ] {
        _id,
        name,
        price,
        "imageurl": image.asset->url
       
      
       }
    `);

    export const allproductsdetail = defineQuery(`
             *[_type == 'product' && isNew]{
             _id,
             name,
             price,
             description,
             "imageurl": image.asset->url


             }
      `)


    