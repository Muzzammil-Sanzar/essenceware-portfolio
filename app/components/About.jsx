"use server";
import Image from "next/image";
import about from "@/app/assets/about.png";
import google from "@/app/assets/google.png";
import dynamic from "next/dynamic";
import AboutUsCeos from "./AboutUsCeos";

const AboutUsBtn = dynamic(() => import("@/app/components/Client/AboutUsBtn"), {
  ssr: false,
});
const AboutUsCarousel = dynamic(
  () => import("@/app/utils/aboutUs/AboutUsCarousel"),
  {
    ssr: false,
  }
);

export default async function About() {
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="font-semibold sm:text-center text-3xl lg:text-[32px] text-blue-140 mb-3 lg:pb-2">
            About Us
          </h1>
          <div className=" text-base text-gray-450 text-balance sm:text-center w-full flex items-end justify-center">
            <p
              className={`sm:max-w-lg lg:max-w-[762px] lg:mb-12 leading-7 lg:text-base text-[13px] hidden sm:block`}
            >
              Essenceware is a software company specializing in Android, iOS, UX/UI design, and ASO. We also offer website development, SEO, Amazon listing image design, and IT courses in partnership with NAVTTC. Our reliable, high-quality solutions help businesses and individuals succeed in the digital world.
            </p>
            <p
              className={`sm:max-w-lg lg:max-w-[762px] lg:mb-12 leading-7 lg:text-base text-[13px] sm:hidden`}
            >
              Essenceware is a mobile app development agency focused on making
              great apps. Our team works hard to design and build apps that are
              easy to use and meet the needs of businesses and people.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10 md:mb-28 mt-10 sm:px-10 md:divide-x-2 lg:divide-x-0 xl:divide-x-2 md:divide-blue-150/30">
          <AboutUsCeos />
        </div>

        <div className="flex mt-8 lg:flex-row flex-col items-center lg:divide-x-2 divide-blue-150/30 gap-y-12">
          {/* <div className="flex items-center justify-start lg:w-2/5 max-w-lg mx-auto w-full gap-4 md:gap-6">
            <div className="">
              <Image
                priority={false}
                loading="lazy"
                src={about}
                width={242}
                height={274}
                alt="about"
                className="lg:ml-4 object-cover"
              />
            </div>
            <div className="lg:pr-4 h-full text-blue-120 space-y-1 ">
              <div className="mr-5">
                <h1 className="text-sm sm:text-sm md:text-xl xl:text-[22px] font-semibold ">
                  Wajahat Malek
                </h1>
                <p className="text-[13px] py-1 text-start font-medium">
                  <span className="italic whitespace-nowrap font-semibold">
                    C.E.O{" "}
                  </span>
                  & Mobile App Developer
                </p>
                <div className="flex items-center gap-1.5 text-gray-450 text-[13px] md:text-sm">
                  <div className="w-[72px] h-6 ">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={google}
                      alt="google"
                      className="object-contain"
                    />
                  </div>
                  <p>Certified</p>
                </div>
              </div>
              <div>
                <p className="text-gray-450 font-normal pt-8 sm:pt-8 lg:pt-4 w-full max-w-[232px] text-sm xl:text-sm ">
                  Wajahat Malek, the CEO of Duseca, leads the company with a
                  focus on new ideas and doing things well.
                </p>
              </div>
            </div>
          </div> */}

          <div className=" w-full space-y-10 lg:space-y-3">
            <AboutUsBtn />
            <div className="px-2">
              <AboutUsCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
