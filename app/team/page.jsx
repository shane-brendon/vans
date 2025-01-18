import React from "react";
import Banner from "@/src/components/banner/Banner";
import TeamGalery from "@/src/components/team/Team";
import Instagram from "@/src/components/instagram/Instagram";
import OpenHours from "@/src/components/openingHours/OpenHours";
function page() {
  return (
    <>
      <Banner />
      <TeamGalery />
      <OpenHours />
      <Instagram />
    </>
  );
}

export default page;
