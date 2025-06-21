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
        style={{
          background:
            "radial-gradient(circle at center, #3A4950 10%,	#12252D 90%)",
        }}
        className=" mb-16"
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
