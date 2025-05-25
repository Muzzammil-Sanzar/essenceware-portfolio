import checkMark from "../../assets/checkMark.svg";
import Image from "next/image";
import ContactUs from "../customMobileDevelopment/ContactUs";

export default function HeloSection() {
  return (
    <div className="grid lg:grid-cols-2 place-content-between place-items-center gap-x-4 gap-y-6">
      <div>
        <div className="space-y-5">
          <h1 className="font-semibold text-3xl lg:text-[32px] max-w-screen-md">
            Custom Mobile App Development: Custom Solutions and Services Across All
            Industries
          </h1>
          <h2 className="font-medium text-[#928F8F]">
            At Duseca Software, our expert team crafts custom mobile apps that perfectly fit your business. Whether you need a complete app from scratch or enhanced features, we provide top-tier solutions tailored to your needs. Partner with us for a mobile app that’s both functional and uniquely yours.
          </h2>
        </div>
        {/* <div className="my-5">
          <ContactUsBtn />
        </div> */}
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
        {/* <HeroCarousel /> */}
        <ContactUs />
      </div>
    </div>
  );
}
