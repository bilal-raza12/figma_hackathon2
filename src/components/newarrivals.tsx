



import { SanityFetch } from "@/sanity/lib/fetch";
import { IProducts } from "@/app/types/types";
import { allproducts } from "@/sanity/lib/query";
import Link from "next/link";

const NewArrivals = async () => {
  const data: IProducts[] = await SanityFetch({ query: allproducts });
  return (
    <div>
      <div className="pb-8">
        <h1 className="font-integralcfbold relative ml-[45px] bottom-[-270px] sm:ml-[513px] sm:bottom-[230px] md:text-[48px] text-[32px] leading-[38px] sm:leading-[58px]">
          New Arrivals
        </h1>

        <div className="flex justify-between md:gap-[10px] gap-0 md:ml-[w0px] ml-[8px] absolute top-[1050px]">
          {data.slice(0, 4).map((item) => (
            <Link href={`/newarrivals/${item._id}`}>
            <div
              key={item.name}
              className="flex flex-col rounded-[20px] gap-[16px] h-auto"
            >
                <div>
                  <img
                    className="w-[198px] h-[200px] sm:w-[295px] sm:h-[298px]"
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
        <button className="py-4 px-[54px] md:w-[218px] w-[320px] md:mt-[290px] mt-[650px] md:ml-[551px] ml-4 font-satoshimedium rounded-[62px] border-[1px] bg-black bg-opacity-[10%] text-black">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
