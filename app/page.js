import About from "./components/About";
import Consultation from "./utils/Consultation";
import OurWork from "./utils/OurWork";
import Services from "./utils/Services";
import AppIndustries from "./components/AppIndustries";
import Hero from "./components/Hero";
import Reviews from "./utils/Reviews";

import dynamic from "next/dynamic";
// import Headers from "@/components/Headers";
const Headers = dynamic(() => import("./components/Headers"), {
  ssr: false,
});

export default async function Home() {
  return (
    <>
      <div className="w-full md:px-8 px-4">
        <div className="max-w-screen-1xl mx-auto hero" id="hero">
          <Headers />
          <div className="hero-section section" data-section-name="hero">
            <Hero />
          </div>
          <div className="my-16 md:my-20 lg:my-28 border-t border-[#DADBDD] w-full"></div>
          <div className="space-y-16">
            <div
              id="About Us"
              className="about-section section"
              data-section-name="about"
            >
              <About />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div>
            <div
              id="Free Consultation"
              className="consultation-section section"
              data-section-name="consultation"
            >
              <Consultation showIcons={true} />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div>
            {/* <div
              id="appIndustries"
              className="appIndustries section"
              data-section-name="appIndustries"
            >
              <AppIndustries />
            </div>
            <div className=" border-t  border-[#DADBDD] w-full"></div> */}
            {/* <div
              id="OurWork"
              className="work-section section"
              data-section-name="work"
            >
              <OurWork />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div> */}
            <div
              id="Services"
              className="service-section section"
              data-section-name="service"
            >
              <Services />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div>
            <div
              id="Reviews"
              className="reviews-section section"
              data-section-name="reviews"
            >
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
