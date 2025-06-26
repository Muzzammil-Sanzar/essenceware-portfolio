import About from "./components/About";
import Consultation from "./utils/Consultation";
import OurWork from "./utils/OurWork";
import Services from "./utils/Services";
import background from "@/app/assets/background.png"
import Hero from "./components/Hero";
import Reviews from "./utils/Reviews";

import dynamic from "next/dynamic";
import Image from "next/image";
// import Headers from "@/components/Headers";
const Headers = dynamic(() => import("./components/Headers"), {
  ssr: false,
});

export default async function Home() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full ">
          <div className="relative w-full h-[70vh] md:h-[90vh] lg:h-[100vh] overflow-hidden mb-16 md:mb-20 lg:mb-28">
            <div className="absolute hidden md:block top-0 left-0 w-full h-full ">
              <Image
                priority={false}
                loading="lazy"
                src={background}
                alt="logo"
                className="w-full h-full"
                width={230}
                height={100}
                quality={100}
              />
            </div>
            <div className="max-w-screen-1xl mx-auto hero md:px-8 px-4" id="hero">
              <Headers />

              <div className="hero-section section h-[60vh] sm:h-[80vh]" data-section-name="hero">
                <Hero />
              </div>
            </div>
          </div>
          <div className="space-y-16 md:px-8 px-4">
            <div
              id="About Us"
              className="about-section section"
              data-section-name="about"
            >
              <About />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div>
            <div
              id="Services"
              className="service-section section"
              data-section-name="service"
            >
              <Services />
            </div>
            <div className=" border-t border-[#DADBDD] w-full"></div>
            <div
              id="OurWork"
              className="work-section section"
              data-section-name="work"
            >
              <OurWork />
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
