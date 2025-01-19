import { createClient } from "next-sanity";


export const client = createClient({
    projectId: "etgiegus",
    dataset: "production",
    useCdn: true,
    apiVersion: '2025-01-13',
    token:"skwp1nzp1cGcrUCJ9phPqeoHWpffVzsNApZiYss9ureSQCRaBuP3mpPQZh7Yb5PAg6G31htyjbKnGnBPm7EaNFyJ8ftC6Bs3d3koZzP2CbbZojENTAuUgQtIdAxTUYBXXA1lmQGu0Lfb98INyAKLudYj2JpRM2cih7RNZLu53fl4VvxvD2Lx",
  });

  export async function SanityFetch({query,params = {}}:{query:string,params?:any}){

      return await client.fetch(query,params) 
  }