import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
      *[_type == "product" ] {
      
        name,
        price,
        "imageurl": image.asset->url

      }
    `);
    