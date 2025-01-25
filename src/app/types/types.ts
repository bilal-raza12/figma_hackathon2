export interface IProducts{
    id(id: any): void
    _id:string,
  name:string,
  description:string,
  price:string,
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