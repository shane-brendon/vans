import React from "react";
import Banner from "@/src/components/banner/Banner";
import BookingPriceList from "@/src/components/bookingPriceList/BookingPriceLIst";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <BookingPriceList />
      <MeaTreatementPrice
        type={"booking"}
        caption={"Make Appointment"}
        title={"Get Our Service"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
      />
    </>
  );
}

export default page;
