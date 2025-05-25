import "../casestudy.css";
import Image from "next/image";
import logo from "@/app/assets/duseca.png";
import fiverr from "@/app/assets/fiverr.png";
import fiverrIcon from "@/app/assets/fiverrIcon.svg";
import one from "@/app/assets/01.svg";
import two from "@/app/assets/02.svg";
import three from "@/app/assets/03.svg";
import four from "@/app/assets/04.svg";
import { Syne } from "next/font/google";
import Link from "next/link";
// import AppIndustriesDrop from "@/app/utils/navbar/AppIndustriesDrop";
import { GoHomeFill } from "react-icons/go";
// Client Comps
import dynamic from "next/dynamic";
import Reviews from "@/app/utils/Reviews";
// import About from "@/app/components/About";
// import OurWork from "@/app/utils/OurWork";
// import AppIndustries from "@/app/components/AppIndustries";
import Consultation from "@/app/utils/Consultation";
import CaseStudyDetailPageNavBar from "./CasestudyDetailPageNavbar";
import ContactUs from "../mobileAppDevelopment/ContactUs";
import IndustrialDetailPageFooter from "../mobileAppDevelopment/IndustrialDetailPageFooter";
import MenueIcon from "./MenueIcon";
import BtnBar from "./BtnBar";
import PricingBtn from "./PricingBtn";
import BookACallCard from "./BookACallCard";
import BtnMobileBar from "./BtnMobileBar";
// import WorkCara2 from "./Client/WorkCara2";

//////////////////////////////////////////////////////////////////////
// import SolutionCarousel from "@/utils/rental-app/solutionCarousel";
const SolutionCarousel = dynamic(
  () => import("@/app/utils/rental-app/solutionCarousel"),
  {
    ssr: false,
  }
);
// const WorkCara2 = dynamic(() => import("./Client/WorkCara2"), {
//   ssr: false,
// });
///////////////////////////////////////////////////////////////////////////////
// const SlugNavBar = dynamic(() => import("@/app/components/NavBar/SlugNavBar"), {
//   ssr: false,
// });

const syne = Syne({ subsets: ["latin"] });

export default async function CasestudyDetailPage({ industry }) {
  return (
    <>
      <CaseStudyDetailPageNavBar />
      <div className="relative w-full h-full transform overflow-hidden bg-[#F6F6F6] overflow-y-auto custom-scrollbar text-left align-middle transition-all">
        {/* For screens larger screens */}
        <div className="bg-[#26272E] w-full h-full px-8 pt-7 z-0 hidden xl:block">
          <div className="w-[602px] h-[602px] bg-[#1D7CCFA6] rounded-full absolute blur-[160px] -top-[2.6%] -left-[5%]"></div>
          <div className="w-[685px] h-[685px] bg-[#1D7CCF26] rounded-full absolute blur-[80px] right-[14%]"></div>
          <div className="space-y-28 max-w-[1440px] mx-auto w-full h-full flex flex-col justify-between z-50">
            {/* NAVBAR MAIN */}
            <div className="cursor-pointer z-50 max-w-screen-1xl w-full border-b pb-5">
              <div className="w-full flex justify-between">
                <Link href={"/custom-mobile-app-development"}>
                  <div className="w-[152px] h-[47px]">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={logo}
                      alt="logo"
                      width={152}
                      height={47}
                    />
                  </div>
                </Link>
                <div className="flex gap-8 items-center md:justify-center lg:text-base text-sm text-gray-200 w-full whitespace-nowrap">
                  <Link
                    href={"/custom-mobile-app-development"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300 flex items-center gap-0.5"
                  >
                    <GoHomeFill /> Home
                  </Link>
                  <Link
                    href={"#consultation"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Consultations
                  </Link>
                  <Link
                    href={"#process"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Process
                  </Link>
                  {/* <div>
                    <AppIndustriesDrop text={"text-gray-200"} />
                  </div> */}
                  <Link
                    href={"#contactus"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Conctact us
                  </Link>
                  {/* <Link
                    href={"#team"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    About Us
                  </Link> */}
                  <Link
                    href={"#reviews"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Reviews
                  </Link>
                </div>
                <div>
                  <PricingBtn />
                </div>
              </div>
            </div>
            <div></div>
            {/* Hero section */}
            <div className="relative flex items-end justify-between">
              <div className="space-y-8 pb-28 text-white">
                <div className=" space-y-5">
                  <div className="text-white space-y-3">
                    <div>
                      <div className={syne.className}>
                        <h1 className="font-bold text-[44px] ">
                          {industry?.title} Apps
                        </h1>
                      </div>
                      <p className="text-sm font-medium max-w-md">
                        {industry?.shortTagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="">
                        <Image
                          priority={false}
                          loading="lazy"
                          src={fiverrIcon}
                          alt="fiverIcon"
                          className=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <span className="font-semibold text-[9px] text-white bg-green-350 px-1.5 rounded">
                          Best Seller
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Image
                          priority={false}
                          loading="lazy"
                          src={fiverr}
                          width={64}
                          alt="fiverr"
                        />
                        <div className="flex gap-1">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                              fill="#E6EB13"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                              fill="#E6EB13"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                              fill="#E6EB13"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                              fill="#E6EB13"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                              fill="#E6EB13"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <Link href={"#reviews"}>
                          <p className="text-[10px] cursor-pointer font-medium underline z-50">
                            (Click to see 458 Reviews)
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnBar />
              </div>
              <div className="">
                <div className={syne.className}>
                  <div
                    className={`absolute left-[40%] top-0 font-bold text-white leading-7 space-y-2`}
                  >
                    <h2 className="text-2xl xl:text-[30px] 1xl:text-[35px] max-w-xs">
                      MOBILE APP{" "}
                      <span className="text-base xl:text-[22px] 1xl:text-[27px]">
                        DEVELOPMENT
                      </span>
                    </h2>
                    <h3 className="text-2xl  xl:text-[30px] 1xl:text-[35px]">
                      AGENCY
                    </h3>
                  </div>
                  <div className="absolute bottom-20 left-[58%] 1xl:left-[62.55%] z-10">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={industry?.banner}
                      alt="rental app"
                      // static width height change later
                      width={328}
                      height={444}
                    />
                  </div>
                  {/* 700+ Apps */}
                  <div
                    className={`absolute right-0 top-0 font-bold text-white leading-8`}
                  >
                    <div className=" max-w-[170px] w-full">
                      <h3 className="text-2xl xl:text-[40px] leading-10">
                        700+ APPS
                      </h3>
                      <h2 className="text-sm xl:text-lg ">DEVELOPED</h2>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 z-50 flex justify-end">
                  <Image
                    priority={false}
                    loading="lazy"
                    className="object-contain z-50 max-w-4xl"
                    src={
                      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718198118/App%20Industry%20Banner/team_1_nu2vxz.png"
                    }
                    alt="team"
                    width={940}
                    height={215}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For responsive designs */}
        <div className="relative bg-[#26272E] w-full min-h-[420px] sm:min-h-[670px] h-full xl:hidden">
          <div className="w-[156px] h-[156px] sm:w-[302px] sm:h-[302px] bg-[#1D7CCFA6] rounded-full absolute blur-[55px] sm:blur-[80px] -top-9 sm:-top-[10%] -left-6 sm:-left-[5%] z-0"></div>
          <div className="w-[156px] h-[156px] sm:w-[392px] sm:h-[392px]  lg:w-[502px] lg:h-[502px] bg-[#1D7CCF26] rounded-full absolute bottom-16 blur-[20px] lg:blur-[80px] sm:top-[30%] right-[2.7%] sm:-right-[15%] md:right-[5%]"></div>
          {/* duseca Logo */}``
          <div className="absolute top-4 px-4 sm:px-8 flex items-start justify-start w-full">
            <div className="z-50 max-w-screen-1xl w-full border-b pb-5 ">
              <div className="w-full flex justify-between items-center">
                <Link href={"/custom-mobile-app-development"}>
                  <div className="w-[120px] md:w-[152px] cursor-pointer">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={logo}
                      alt="logo"
                      width={152}
                      height={47}
                    />
                  </div>
                </Link>
                <div className="sm:flex hidden gap-3.5 xl:gap-8 items-center sm:justify-center lg:text-base text-sm text-gray-200 w-full whitespace-nowrap">
                  <Link
                    href={"/custom-mobile-app-development"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300 flex items-center gap-0.5"
                  >
                    <GoHomeFill /> Home
                  </Link>
                  <Link
                    href={"#consultation"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Consultations
                  </Link>
                  <Link
                    href={"#process"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Process
                  </Link>
                  <Link
                    href={"#contactus"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={"#reviews"}
                    className="text-xs lg:text-sm font-medium hover:text-blue-150 transition duration-300"
                  >
                    Reviews
                  </Link>
                </div>
                <div className="sm:hidden">
                  <MenueIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bgg top-0 h-full w-full flex flex-col justify-between px-3.5 sm:px-8">
            <div className="h-full w-full mt-28 sm:mt-32">
              {/* heading section */}
              <div className=" text-white text-center space-y-1">
                <div className={syne.className}>
                  <h1 className="font-bold text-2xl sm:text-3xl sm:text-[44px]">
                    {industry?.title} {industry?.extension}
                  </h1>
                </div>
                <p className="text-xs sm:text-sm hidden sm:block line-clamp-3 sm:line-clamp-none sm:font-medium max-w-64 sm:max-w-md mx-auto">
                  {industry?.tagLine}
                </p>
                <p className="text-xs sm:text-sm sm:hidden block sm:font-medium max-w-64 sm:max-w-md mx-auto">
                  {industry?.shortTagline}
                </p>
              </div>
              <div className="">
                <div className={syne.className}>
                  <div className="max-w-sm sm:max-w-screen-md mx-auto">
                    <div className="flex justify-between w-full mt-10 sm:mt-28 md:mt-24">
                      <div className="space-y-4">
                        <div className="font-bold text-white -space-y-0.5 sm:-space-y-1.5 lg:space-y-0.5">
                          <p className="text-base sm:text-xl md:text-3xl lg:text-[35px] max-w-32 sm:max-w-52 md:max-w-xs ">
                            MOBILE APP{" "}
                          </p>
                          <p className="text-[13px] sm:text-sm md:text-base lg:text-[25px]">
                            DEVELOPMENT
                          </p>
                          <p className="text-[20px] sm:text-xl md:text-2xl lg:text-[35px] tracking-wide">
                            AGENCY
                          </p>
                        </div>
                        <div className="sm:flex items-center gap-4 hidden z-30">
                          <div>
                            <div className="px-3 py-2.5 w-fit rounded-xl bg-green-350">
                              <Image
                                priority={false}
                                loading="lazy"
                                src={fiverrIcon}
                                alt="fiverIcon"
                                className="w-[33.8px] h-[33.8px]"
                              />
                            </div>
                          </div>
                          <div className="z-30">
                            <div className="font-sans">
                              <span className="font-semibold text-[10px] text-white bg-green-350 px-1.5 rounded">
                                Best Seller
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Image
                                priority={false}
                                loading="lazy"
                                src={fiverr}
                                width={64}
                                alt="fiverr"
                              />
                              <div className="flex gap-1">
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                                    fill="#E6EB13"
                                  />
                                </svg>
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                                    fill="#E6EB13"
                                  />
                                </svg>
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                                    fill="#E6EB13"
                                  />
                                </svg>
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                                    fill="#E6EB13"
                                  />
                                </svg>
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 6.31285C16 6.48299 15.875 6.64367 15.75 6.76654L12.2596 10.1125L13.0865 14.8384C13.0962 14.9045 13.0962 14.9612 13.0962 15.0274C13.0962 15.2732 12.9808 15.5 12.7019 15.5C12.5673 15.5 12.4327 15.4527 12.3173 15.3866L8 13.156L3.68269 15.3866C3.55769 15.4527 3.43269 15.5 3.29808 15.5C3.01923 15.5 2.89423 15.2732 2.89423 15.0274C2.89423 14.9612 2.90385 14.9045 2.91346 14.8384L3.74038 10.1125L0.240385 6.76654C0.125 6.64367 0 6.48299 0 6.31285C0 6.0293 0.298077 5.91588 0.538462 5.87807L5.36539 5.18809L7.52885 0.887524C7.61539 0.707939 7.77885 0.5 8 0.5C8.22115 0.5 8.38462 0.707939 8.47115 0.887524L10.6346 5.18809L15.4615 5.87807C15.6923 5.91588 16 6.0293 16 6.31285Z"
                                    fill="#E6EB13"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="z-30">
                              <Link href={"#reviews"}>
                                <p className="text-[10px] font-medium text-white font-sans underline">
                                  (Click to see 458 Reviews)
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="font-bold text-white max-w-20 sm:max-w-[150px] lg:max-w-56 -space-y-1 md:space-y-1.5">
                        <h3 className="text-[25px] sm:text-2xl md:text-[40px]">
                          700+
                        </h3>
                        <h3 className="text-base sm:text-2xl md:text-[40px]">
                          APPS
                        </h3>
                        <h2 className="text-[10px] sm:text-base md:text-lg">
                          DEVELOPED
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 sm:bottom-16 z-10 flex justify-center w-full">
                    <Image
                      priority={false}
                      loading="lazy"
                      className="w-28 sm:w-56"
                      src={industry?.banner}
                      alt="rental app"
                      width={328}
                      height={444}
                    // static width height change later
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 z-20 flex justify-center w-full">
                <Image
                  priority={false}
                  loading="lazy"
                  className="z-50 max-w-[630px] object-contain  w-[360px] sm:w-full"
                  src={
                    "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718198118/App%20Industry%20Banner/team_1_nu2vxz.png"
                  }
                  alt="team"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="body" className="xl:pt-20 max-w-[1440px] mx-auto px-5 sm:px-8 ">
          <BtnMobileBar />
          {/* first section */}
          <div
            id="home"
            data-section-name="home"
            className="grid grid-cols-12 home-section place-content-end gap-y-6 pt-10"
          >
            <div className="space-y-3 sm:space-y-6 col-span-12 md:col-span-8 lg:col-span-5">
              <h1 className="font-semibold text-[26px] sm:text-3xl lg:text-xl xl:text-2xl 1xl:text-3xl">
                Easy digitization for your {industry?.title} business with our
                user-friendly app services.
              </h1>
              <p className="font-medium text-lg italic max-w-md text-gray-450">
                Here is how we helped {industry?.app} to take their operations
                online.
              </p>
              <p className="text-base font-medium text-gray-450">
                {industry?.introduction}
              </p>
              <div className="text-base font-medium text-gray-450 ">
                <p className="pb-3">
                  Here's how we assisted {industry?.app} Verify in their
                  operations online.
                </p>
                {industry?.introBulletPoints.map((bullet, index) => (
                  <li className="font-semibold" key={index}>
                    {bullet}
                  </li>
                ))}
              </div>
              <p>{industry?.introEnd}</p>
            </div>
            <div className="w-full col-span-12  lg:col-span-7 flex justify-center lg:justify-end py-2">
              <Image
                priority={false}
                loading="lazy"
                src={industry?.images[0]}
                alt="rental app about"
                className="w-40 sm:w-56 md:w-64 xl:w-80 object-contain"
                // static width height change later
                width={320}
                height={640}
              />
              <Image
                priority={false}
                loading="lazy"
                // static width height change later
                src={industry?.images[1]}
                alt="rental app about"
                className="w-40 sm:w-56 md:w-64 xl:w-80 object-contain"
                width={320}
                height={640}
              />
            </div>
          </div>
          <div className="my-16 border-t border-[#DADBDD] w-full"></div>

          {/* Problem Section */}
          <div
            data-section-name="home"
            className="max-w-[606px] w-full mx-auto space-y-8 lg:space-y-12"
          >
            <div>
              <p className="lg:text-lg font-semibold">Problem Discovery</p>
              <h1 className="font-normal mt-5 text-xl lg:text-3xl">
                {industry?.problemStatement}
              </h1>
            </div>
            <p className="font-medium text-base lg:text-lg text-gray-450">
              {industry?.problemExplanation}
            </p>
            <div className="bg-[#48AEEE1A] px-10 py-4">
              <div className="flex items-center gap-5">
                <div className="min-h-16 h-full w-1 bg-blue-150" />
                <p className="text-sm sm:text-base lg:text-lg">
                  We took the challenge and started our white paper research to
                  identify the areas of major improvements{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="my-16 border-t border-[#DADBDD] w-full"></div>

          {/* Solution Section */}
          <div data-section-name="home" className="space-y-16 mt-10">
            <div className="max-w-[606px] w-full mx-auto space-y-2.5 lg:space-y-5">
              <p className="lg:text-lg font-semibold">Solution</p>
              <h1 className="font-normal text-xl lg:text-3xl">
                {industry?.solutionStatement}
              </h1>
              <p className="font-medium text-base lg:text-lg text-gray-450">
                {industry?.solutionExplanation}
              </p>
            </div>
            <div>
              <SolutionCarousel industryImages={industry?.images} />
            </div>
            {/* Image Comp */}
            {/* <div>
              <WorkCara2 />
            </div> */}
          </div>
          <>
            <div className="my-16 border-t border-[#DADBDD] w-full"></div>
            {/* SSR */}
            <div
              data-section-name="consultation"
              id="consultation"
              className="space-y-16"
            >
              <Consultation appName={industry?.title} />
              {/* <ConsultationTemp /> */}
            </div>
            <div className="my-16 border-t border-[#DADBDD] w-full"></div>

            {/* Development Cycle Section */}
            <div
              data-section-name="process"
              id="process"
              className="space-y-20"
            >
              <div className={syne.className}>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-bold text-center">
                  {industry?.title} App Development is easy.
                </h1>
              </div>
              {/* this is for screens above 768px */}
              <div className="md:grid grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-y-5 md:gap-y-10 lg:gap-y-16 md:gap-x-6 lg:gap-x-4 hidden">
                <div className="space-y-1 md:space-y-4 order-2 md:order-3 lg:order-none">
                  <div className="flex flex-col items-center md:items-start">
                    <Image
                      priority={false}
                      loading="lazy"
                      className="w-28 h-28 md:w-auto md:h-auto object-contain"
                      src={one}
                      alt="one"
                    />
                    <h3 className="text-3xl font-medium sm:font-semibold">
                      Your Idea
                    </h3>
                    <p className="text-base text-gray-450 max-w-xs text-center md:text-start w-full">
                      Talk to our team about your app idea to make sure it fits
                      well with what users want.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 order-4 md:order-5 lg:order-none">
                  <div className="flex flex-col items-center md:items-start">
                    <Image
                      priority={false}
                      loading="lazy"
                      className="w-28 h-28 md:w-auto md:h-auto object-contain"
                      src={three}
                      alt="one"
                    />
                    <h3 className="text-3xl font-medium sm:font-semibold">
                      Documentation
                    </h3>
                    <p className="text-base text-gray-450 max-w-xs text-center md:text-start w-full">
                      We make a first draft of the project plan that you need to
                      check and approve.
                    </p>
                  </div>
                </div>
                <div className="row-span-2 order-1 lg:order-none flex items-center justify-center">
                  <Image
                    priority={false}
                    loading="lazy"
                    className="px-5 md:px-0 md:w-auto object-contain"
                    src={
                      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718276389/App%20Design/developingIdea_imr6ug.svg"
                    }
                    width={1000}
                    height={1000}
                    alt="idea"
                  />
                </div>
                <div className="space-y-4 order-3 lg:order-none">
                  <div className="flex flex-col items-center md:items-start">
                    <Image
                      priority={false}
                      loading="lazy"
                      className="w-28 h-28 md:w-auto md:h-auto object-contain"
                      src={two}
                      alt="one"
                    />
                    <h3 className="text-3xl font-medium sm:font-semibold">
                      Our Consultation
                    </h3>
                    <p className="text-base text-gray-450 max-w-xs text-center md:text-start w-full">
                      Wajahat Malek leads the session to plan out your app's
                      creation step by step.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 order-5 md:order-2 lg:order-none">
                  <div className="flex flex-col items-center md:items-start">
                    <Image
                      priority={false}
                      loading="lazy"
                      className="w-28 h-28 md:w-auto md:h-auto object-contain"
                      src={four}
                      alt="one"
                    />
                    <h3 className="text-3xl font-medium sm:font-semibold">
                      Development
                    </h3>
                    <p className="text-base text-gray-450 max-w-xs text-center md:text-start w-full">
                      Once approved, we start building the app and keep you
                      updated on the progress.
                    </p>
                  </div>
                </div>
              </div>
              {/* this is only for mobile screens */}
              <div className="flex items-center justify-between md:hidden">
                <div className="basis-[45%] sm:space-y-5">
                  <div className="space-y-1 ">
                    <div className="">
                      <Image
                        priority={false}
                        loading="lazy"
                        className="w-14 h-14 sm:w-auto md:h-auto object-contain"
                        src={one}
                        alt="one"
                      />
                      <h3 className="text-lg sm:text-xl font-medium">
                        Your Idea
                      </h3>
                      <p className="text-sm sm:text-base text-gray-450 max-w-xs w-full">
                        Talk to our team about your app idea to make sure it fits
                        well with what users want.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="">
                      <Image
                        priority={false}
                        loading="lazy"
                        className="w-14 h-14 sm:w-auto md:h-auto object-contain"
                        src={two}
                        alt="one"
                      />
                      <h3 className="text-lg sm:text-xl font-medium">
                        Our Consultation
                      </h3>
                      <p className="text-sm sm:text-base text-gray-450 max-w-xs w-full">
                        Wajahat Malek leads the session to plan out your app's
                        creation step by step.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="">
                      <Image
                        priority={false}
                        loading="lazy"
                        className="w-14 h-14 sm:w-auto md:h-auto object-contain"
                        src={three}
                        alt="one"
                      />
                      <h3 className="text-lg sm:text-xl font-medium">
                        Documentation
                      </h3>
                      <p className="text-sm sm:text-base text-gray-450 max-w-xs w-full">
                        We make a first draft of the project plan that you need to
                        check and approve.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="">
                      <Image
                        priority={false}
                        loading="lazy"
                        className="w-14 h-14 sm:w-auto md:h-auto object-contain"
                        src={four}
                        alt="one"
                      />
                      <h3 className="text-lg sm:text-xl font-medium">
                        Development
                      </h3>
                      <p className="text-sm sm:text-base text-gray-450 max-w-xs w-full">
                        Once approved, we start building the app and keep you
                        updated on the progress.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-[50%] flex justify-end">
                  <Image
                    priority={false}
                    loading="lazy"
                    className=" sm:max-w-full"
                    src={
                      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1720536864/mobileapple_splugi.png"
                    }
                    width={1000}
                    height={1000}
                    alt="idea"
                  />
                </div>

              </div>
            </div>
            <div className="my-16 border-t border-[#DADBDD] w-full"></div>
            {/* SSR */}
            {/* <div data-section-name="appIndustry" id="appIndustry"> */}
            {/* <AppIndustries /> */}
            {/* <AppIndustriesTemp /> */}
            {/* </div> */}
            {/* <div className="my-16 border-t border-[#DADBDD] w-full"></div> */}
            {/* SSR */}
            {/* <div data-section-name="portfolio" id="portfolio"> */}
            {/* <OurWorkTemp /> */}
            {/* <OurWork /> */}
            {/* </div> */}
            {/* <div className="my-16 border-t border-[#DADBDD] w-full"></div> */}
            {/* SSR */}
            {/* <div data-section-name="team" id="team"> */}
            {/* <About /> */}
            {/* </div> */}
            {/* <div className="my-16 border-t border-[#DADBDD] w-full"></div> */}
            {/* Review Section */}
            {/* SSR */}
            <div data-section-name="contactus" id="contactus">
              <BookACallCard />
            </div>
            <div className="my-16 border-t border-[#DADBDD] w-full"></div>

            <div data-section-name="reviews" id="reviews">
              <Reviews />
            </div>
          </>
        </div>
        <div data-section-name="footer" id="footer">
          <IndustrialDetailPageFooter />
        </div>
      </div>
    </>
  );
}
