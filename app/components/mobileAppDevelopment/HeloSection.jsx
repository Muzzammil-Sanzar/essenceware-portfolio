import ConsultationBtn from "../Client/ConsultationBtn";
import checkMark from "../../assets/checkMark.svg";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import ContactUsBtn from "../mobileAppDevelopment/ContactUsBtn";

export default function HeloSection({ header, des, AllowContactBtn }) {
  return (
    <div className="grid lg:grid-cols-2 place-content-between place-items-center gap-y-6">
      <div>
        <div className="space-y-5">
          <h1 className="font-semibold text-3xl lg:text-[32px] max-w-screen-md">
            {header ? header : "App Development For Mobile: Custom Solutions and Services Across All Industries"}
          </h1>
          <h2 className="font-medium text-[#928F8F]">
            {des ? des : 'Duseca Software offers custom mobile app development services and solutions. Our skilled mobile app developers can create a customized app from scratch with features that will make your app unique and user-friendly. Book a free consultation session for guidance and insights on your app'}
          </h2>
        </div>
        <div className="my-5">
          {/* {AllowContactBtn ? */}
          <ContactUsBtn />
          {/* : */}
          {/* <ConsultationBtn /> */}
          {/* } */}
        </div>
        <div className="space-y-4 py-3 text-sm xxs:text-base">
          <div className="flex items-center gap-6">
            <div className="flex items-center font-medium gap-3">
              <Image src={checkMark} alt="check mark" />
              <p>100% Confidential</p>
            </div>
            <div className="flex items-center font-medium gap-3">
              <Image src={checkMark} alt="check mark" />
              <p>We sign NDA</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center font-medium gap-3">
              <Image src={checkMark} alt="check mark" />
              <p>Hire Top 1% Talent</p>
            </div>
            <div className="flex items-center font-medium gap-3">
              <Image src={checkMark} alt="check mark" />
              <p>500+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </div>
  );
}
