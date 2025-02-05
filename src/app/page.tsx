import Hero from "@/components/hero";
import Banner from "@/components/banner";
import NewArrivals from "@/components/newarrivals";

import Dress from "@/components/dress";


export default function Home() {
  return (
    <>
   
    <Hero />
    <Banner />
    <div id="new-arrivals">

    <NewArrivals/>
    </div>
    {/* <TopSelling /> */}
    <Dress/>
    {/* <Reviews/>   */}
   
    </>
  );
}
