// import About from "../components/About";
import WhyUs from "../components/enterprise-andriod-ios-development/WhyUs";
import CaseStrudies from "../components/mobileAppDevelopment-1/CaseStrudies";
import ConsultationTemp from "../components/mobileAppDevelopment-1/ConsultationTemp";
import HeloSection from "../components/mobileAppDevelopment-1/HeloSection";
import IndustriesSection from "../components/mobileAppDevelopment-1/IndustriesSection";
import MobileAppDevelopmentNavbar from "../components/mobileAppDevelopment-1/MobileAppDevelopmentNavbar";
import ContactUs from "../components/mobileAppDevelopment/ContactUs";
import Footer from "../components/mobileAppDevelopment/Footer";
// import OurWork from "../utils/OurWork";
import Reviews from "../utils/Reviews";
import Services from "../utils/Services";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <MobileAppDevelopmentNavbar />
      <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 space-y-20 pt-40">
        <div id="herosection" data-section-name="herosection">
          <HeloSection />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="services" data-section-name="industries">
          <Services />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="whyus" data-section-name="industries">
          <WhyUs />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="industries" data-section-name="industries">
          <IndustriesSection />
        </div>
        <div className="my-16 border-t border-[#DADBDD] w-full"></div>
        <div id="consultation1" data-section-name="consultation1">
          <ConsultationTemp showIcons={false} />
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
