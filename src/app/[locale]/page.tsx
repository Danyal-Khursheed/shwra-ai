import UpdatedNavBar from "@/components/header/UpdatedNavBar";
import Banner from "@/components/Home/Banner";
import BannerSlider from "@/components/Home/BannerSlider";
import Hero from "@/components/Home/Hero";
import Packages from "@/components/Home/Packages";
import Services from "@/components/Home/Services";
import State from "@/components/Home/State";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <div
        className="
    mb-16
    md:bg-[url('/assets/Icons/heroBackground.svg'),radial-gradient(circle_at_center,_#4A5A62_5%,_#12252D_50%)]
bg-[url('/assets/Icons/heroBackgroundMobile.svg'),radial-gradient(circle_at_center,_#4A5A62_5%,_#12252D_50%)]
    bg-cover
    bg-start
    bg-repeat
    
  "
      >
        <UpdatedNavBar />
        <Hero />
        <BannerSlider />
      </div>
      <State />
      <Services />
      <Packages />
      <Banner />
    </div>
  );
}
