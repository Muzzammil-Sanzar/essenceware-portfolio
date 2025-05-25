import Image from "next/image";
import { TbArrowBackUpDouble } from "react-icons/tb";
import chatIcon from "@/app/assets/chatIcon.svg";
import IndustryDetailPageBtn from "@/app/components/mobileAppDevelopment/IndustryDetailPageBtn";
import IndustryDetailPageNavbar from "@/app/components/mobileAppDevelopment/IndustryDetailPageNavbar";
import Link from "next/link";
import IndustrialDetailPageFooter from "@/app/components/mobileAppDevelopment/IndustrialDetailPageFooter";

export default function IndustryDetailPage({ industry }) {
  return (
    <div className="bg-[#F6F6F6] min-h-screen ">
      <IndustryDetailPageNavbar link='/enterprise-andriod-ios-development' />
      <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 space-y-36 my-16 pt-28">
        <div className="space-y-8 lg:space-y-12">
          <div className="w-fit">
            <Link href={"/enterprise-andriod-ios-development"} className="w-fit">
              <div className="flex items-center lg:text-xl text-gray-750 gap-1 border-b w-fit border-gray-750">
                <TbArrowBackUpDouble className="lg:w-6 lg:h-6" />
                <p>Back</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl lg:text-[40px] font-medium">
              {industry?.name} Platform Mobile App
            </h1>
            {/* <ScheduleBtn text={'Get An App Like This'} /> */}
          </div>
          <div className="space-y-4 hover:drop-shadow-lg duration-200 cursor-pointer hover:p-[1px] ease-linear bg-[#D6D6D6] rounded-3xl min-h-[216px] md:min-h-[500px] lg:min-h-[600.62px]">
            <Image
              priority={false}
              loading="lazy"
              quality={100}
              src={industry?.image}
              className="object-contain"
              width={7000}
              height={175.62}
              alt="industry"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold text-[#141414]">
              Description:
            </h1>
            <p className="text-[#475569]">{industry?.des1}</p>
            <p className="text-[#475569]">{industry?.des2}</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-[#496f5d] bg-opacity-85 rounded-2xl p-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10">
              <div className="flex items-center justify-center w-full h-full">
                <Image src={chatIcon} width={24} height={24} alt="chat" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-medium text-white z-50">
                Schedule A Consultation with Our Expert
              </h2>
            </div>
            <div>
              <IndustryDetailPageBtn />
            </div>
          </div>
          <div className="absolute -top-4 -right-6">
            <svg
              width="261"
              height="253"
              viewBox="0 0 261 253"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.6401 152.561L43.3201 225.939L88.4103 252L130.73 178.621L173.05 252L218.141 225.939L175.821 152.561H260.461V100.439H175.821L218.141 27.0606L173.05 1L130.73 74.3788L88.4102 1L43.32 27.0606L85.6401 100.439H1V152.561H85.6401Z"
                strokeOpacity="0.56"
                strokeLinecap="square"
                className="stroke-white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <IndustrialDetailPageFooter />
      </div>
    </div>
  );
}
