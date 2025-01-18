import React from "react";
import Banner from "@/src/components/banner/Banner";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
import { MeaTeam } from "@/src/components/team/Team";
import OpenHours from "@/src/components/openingHours/OpenHours";
import Instagram from "@/src/components/instagram/Instagram";
function page() {
  return (
    <>
      <Banner />
      <MeaAbout />
      <MeaTreatementPrice
        caption={"Why Choose Us"}
        title={"Take Your Nails To The Next Level"}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque."
        }
        button={true}
      />
      <MeaTeam />
      <OpenHours />
      <Instagram />
    </>
  );
}

export default page;
