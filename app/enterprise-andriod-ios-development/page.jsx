import ConsultationTemp from "../components/Client/TempComps/ConsultationTemp";
import WhyUs from "../components/enterprise-andriod-ios-development/WhyUs";
import CaseStrudies from "../components/mobileAppDevelopment/CaseStrudies";
import ContactUs from "../components/mobileAppDevelopment/ContactUs";
import Footer from "../components/mobileAppDevelopment/Footer";
import HeloSection from "../components/mobileAppDevelopment/HeloSection";
import IndustriesSection from "../components/mobileAppDevelopment/IndustriesSection";
import MobileAppDevelopmentNavbar from "../components/NavBar/MobileAppDevelopmentNavbar";
import Reviews from "../utils/Reviews";
import Services from "../utils/Services";

export default function page() {
  return (
    <div className="bg-[#F6F6F6] relative">
      <MobileAppDevelopmentNavbar link='/enterprise-andriod-ios-development' />
      <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 space-y-20 pt-40">
        <div id="herosection" data-section-name="herosection">
          <HeloSection
            header='Enterprise Android and iOS Development: Custom Solutions and Services Across All Industries'
            des='Duseca Software offers custom enterprise Android and iOS app development services and solutions. Our skilled developers can create a fully customized app from scratch with features that will make your app unique, scalable, and user-friendly. Book a free consultation session for expert guidance and insights on your app development needs.'
            AllowContactBtn={true}
          />
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
          <IndustriesSection link='/enterprise-andriod-ios-development' />
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
          <CaseStrudies link="/enterprise-andriod-ios-development" />
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
  )
}
