import React from "react";
import Banner from "@/src/components/banner/Banner";
import Services, { Cards } from "@/src/components/services/Services";
import Testiamonials from "@/src/components/testimonials/Testiamonials";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <Services>
        <Cards />
      </Services>
      <Testiamonials />
      <MeaTreatementPrice
        type={"priceList"}
        title={"It’s Time to Get Trimmed."}
        caption={"Treatments & Prices"}
      />
    </>
  );
}

export default page;
