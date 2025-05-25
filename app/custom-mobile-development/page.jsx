// import About from "../components/About";
import CaseStrudies from "../components/customMobileDevelopment/CaseStrudies";
import ContactUs from "../components/customMobileDevelopment/ContactUs1";
import HeloSection from "../components/customMobileDevelopment/HeloSection";
import IndustriesSection from "../components/customMobileDevelopment/IndustriesSection";
import MobileAppDevelopmentNavbar from "../components/customMobileDevelopment/MobileAppDevelopmentNavbar";
import ConsultationTemp from "../components/mobileAppDevelopment-1/ConsultationTemp";
import Footer from "../components/mobileAppDevelopment/Footer";
// import OurWork from "../utils/OurWork";
import Reviews from "../utils/Reviews";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <MobileAppDevelopmentNavbar />
      <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 space-y-20 pt-40">
        <div id="herosection" data-section-name="herosection">
          <HeloSection />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="industries" data-section-name="industries">
          <IndustriesSection />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="consultation1" data-section-name="consultation1">
          <ConsultationTemp showIcons={false} hideButton={true} />
        </div>
        {/* <div id="ourwork1">
          <OurWork />
        </div> */}
        {/* <div id="about1">
          <About />
        </div> */}
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="casestudies1" data-section-name="casestudies1">
          <CaseStrudies />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="contactus" data-section-name="contactus">
          <ContactUs />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="reviews" data-section-name="reviews">
          <Reviews />
        </div>
      </div>
      <div id="footer" data-section-name="footer">
        <Footer />
      </div>
    </div>
  );
}
