export interface IProducts{
   
    _id:string,
  name:string,
  description:string,
  price:number,
  imageurl:string,
  category:string,
  discountPercent:string,
  isNew:boolean,
  colors:string,
  sizes:string,
  slug:{
    _type:"slug"
    current:string,
  },
  quantity?:number,
} 