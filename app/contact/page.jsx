import React from "react";
import Banner from "@/src/components/banner/Banner";
import ContactCards from "@/src/components/contactCarts/ContactCards";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <ContactCards />
      <MeaTreatementPrice
        type={"contact"}
        caption={"Contact"}
        title={"Get in touch"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </>
  );
}

export default page;
