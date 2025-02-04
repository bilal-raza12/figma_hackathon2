



import { SanityFetch } from "@/sanity/lib/fetch";
import { IProducts } from "@/app/types/types";
import { allproductsdetail } from "@/sanity/lib/query";
import Link from "next/link";

const NewArrivals = async () => {
  const data: IProducts[] = await SanityFetch({ query: allproductsdetail });
  return (
    <div>
      <div className="pb-8">
        <h1 className="font-integralcfbold relative ml-[45px] bottom-[-270px] sm:ml-[513px] sm:bottom-[230px] md:text-[48px] text-[32px] leading-[38px] sm:leading-[58px]">
          New Arrivals
        </h1>

        <div className="grid md:grid-cols-4  grid-cols-2 justify-between md:gap-[10px] gap-3 md:ml-[10px] ml-[8px] absolute top-[1140px]">
          {data.slice(0, 4).map((item) => (
            <Link  key={item.name} href={`/newarrivals/${item._id}`}>
            <div
             
              className="flex flex-col rounded-[20px] border-[1px]  md:gap-[16px] gap-2 h-auto"
            >
                <div>
                  <img
                    className=" w-full md:h-[200px] h-[170px]  sm:h-[298px]"
                    src={item.imageurl}
                    alt={item.name}
                    width={235}
                    height={200}
                  />
                </div>
                <h1 className="font-satoshibold md:text-[20px] md:leading-[27px] text-[16px] leading-[21px]">
                  {item.name}
                </h1>
                <div className="flex sm:gap-[13px] gap-[11px]"></div>
                <h1 className="font-satoshibold md:text-[24px] text-[20px] leading-[27px] md:leading-[32.4px]">
                  ${item.price}
                </h1>
            </div>
              </Link>
          ))}
        </div>
      </div>

      <div>
        <Link href={"/newarrivals"}>
        <button className="py-4 px-[54px] md:w-[218px] w-[320px] md:mt-[290px] mt-[650px] md:ml-[551px] ml-4 font-satoshimedium rounded-[62px] border-[1px] bg-black bg-opacity-[10%] text-black">
          View All
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
