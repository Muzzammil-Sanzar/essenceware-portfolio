"use client";
// import AppIndustriesCarousel from "@/utils/appIndustries/appIndustriesCarousel";
import dynamic from "next/dynamic";
const AppIndustriesCarousel = dynamic(
  () => import("@/utils/appIndustries/appIndustriesCarousel"),
  {
    ssr: false,
  }
);

export default function AppIndustriesTemp() {
  return (
    <div className="">
      <div className="space-y-5 md:space-y-9">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold leading-4">App Industries</h1>
          <div className="max-w-xl w-full text-gray-450 text-base">
            <p className={"hidden sm:block"}>
              Duseca makes apps for every industry. Our skilled professionals
              create applications for education, healthcare, e-commerce,
              entertainment, and more. Each app is designed to meet specific
              needs and deliver great results. With Duseca, every industry gets
              top-quality apps.
            </p>
            <p className={"sm:hidden"}>
              Duseca makes apps for every industry. Our skilled professionals
              create applications for education, healthcare, e-commerce,
              entertainment, and more. Each app is designed to meet specific
              needs and deliver great results.
            </p>
          </div>
        </div>
        <div>
          <AppIndustriesCarousel />
        </div>
      </div>
    </div>
  );
}
