import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
      *[_type == "product" ] {
        _id,
        name,
        price,
        "imageurl": image.asset->url
       
      
       }
    `);


    