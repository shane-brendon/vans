import Hero from "@/src/components/hero/Hero";
import Instagram from "@/src/components/instagram/Instagram";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
import OpenHours from "@/src/components/openingHours/OpenHours";
import Services, { Cards } from "@/src/components/services/Services";
import Testiamonials from "@/src/components/testimonials/Testiamonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <MeaAbout />
      <Services>
        <Cards />
      </Services>
      <MeaTreatementPrice
        type={"priceList"}
        caption={"Treatments & Prices"}
        title={"It’s Time to Get Trimmed."}
      />
      <Testiamonials />
      <OpenHours />
      <Instagram />
    </main>
  );
}
