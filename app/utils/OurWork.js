"use server";
import "./ourwork.css";

import Link from "next/link";
import ConsultationBtn from "@/app/components/Client/ConsultationBtn";
import PricingBtn from "@/app/components/NavBar/PricingBtn";
// import WorkCara from "@/components/Client/WorkCara";
import dynamic from "next/dynamic";
const WorkCara = dynamic(() => import("@/app/components/Client/WorkCara"), {
  ssr: false,
});
export default async function OurWork() {
  return (
    <div className="space-y-3 ">
      <div className="">
        <div className="space-y-3 md:space-y-5 1xl:space-y-8 max-w-4xl mx-auto text-center w-full">
          <div className="space-y-4">
            <h1 className="font-semibold text-3xl text-center">Our Courses</h1>
            <p className={`font-medium text-gray-350 text-base text-center`}>
              At EssenceWare, we believe in empowering your learning journey
              with a diverse range of courses, available both for free and at an
              affordable price. Whether you're looking to explore new interests,
              enhance your skills, or advance your career, EssenceWare provides
              high-quality educational content designed to meet your needs.
            </p>
          </div>

          <p className={`font-medium text-gray-350 text-base hidden sm:block`}>
            Our free courses offer a fantastic opportunity to dive into various
            subjects without any commitment. They're perfect for gaining
            foundational knowledge, trying out a new field, or simply expanding
            your horizons.
          </p>
        </div>
        <div className="w-full md:pt-4 space-y-4">
          <div className="text-right">
            <Link href={"/portfolio"} aria-label="portfolio" prefetch={true}>
              <p className="text-blue-150 text-sm font-medium underline cursor-pointer block lg:hidden">
                See all projects (53)
              </p>
            </Link>
          </div>
          <div className="text-right">
            <Link href={"/portfolio"}>
              <p className="text-blue-150 text-sm font-medium underline cursor-pointer hidden lg:block lg:mr-10">
                See all projects
              </p>
            </Link>
          </div>
          <WorkCara />
        </div>
      </div>
    </div>
  );
}
