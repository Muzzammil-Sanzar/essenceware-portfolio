"use client";
import "@/utils/ourwork.css";

import Link from "next/link";
import ConsultationBtn from "@/components/Client/ConsultationBtn";
// import WorkCara from "@/components/Client/WorkCara";
import dynamic from "next/dynamic";
const WorkCara = dynamic(() => import("@/components/Client/WorkCara"), {
  ssr: false,
});
export default function OurWorkTemp() {
  return (
    <div className="space-y-3 ">
      <div className="text-right">
        <Link href={"/portfolio"}>
          <p className="text-blue-150 text-sm font-medium underline cursor-pointer hidden lg:block lg:mr-10">
            See all projects
          </p>
        </Link>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="space-y-3 md:space-y-5 1xl:space-y-8 max-w-[475px] w-full">
          <div className="space-y-4">
            <h1 className="font-semibold text-3xl">Portfolio</h1>
            <p className={`font-medium text-gray-350 sm:text-start text-base `}>
              Duseca has successfully made over 700+ mobile apps, with a team of
              50+ people. Our customers love us, giving 450+ reviews and a
              5-star rating. We're proud to help bring your app ideas to life
              with care and quality.
            </p>
          </div>

          <p
            className={`font-medium text-gray-350 sm:text-start text-base hidden sm:block`}
          >
            Book a meeting with Wajahat Malek for a simple chat on how to build
            your app. He and our Duseca team will show you each step to make
            your app idea real.
          </p>

          <div className="text-sm sm:text-base font-semibold py-2">
            <ConsultationBtn />
          </div>
        </div>
        <div className="w-full md:pt-4 space-y-4">
          <div className="text-right">
            <Link href={"/portfolio"} aria-label="portfolio" prefetch={true}>
              <p className="text-blue-150 text-sm font-medium underline cursor-pointer block lg:hidden">
                See all projects (53)
              </p>
            </Link>
          </div>
          <WorkCara />
        </div>
      </div>
    </div>
  );
}
