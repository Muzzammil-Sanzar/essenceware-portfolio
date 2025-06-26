"use server";
import Image from "next/image";
import hero from "../assets/hero.png";
import fiverr from "../assets/fiverr1.svg";
import fiverrIcon from "../assets/fiverrIcon.svg";
import Link from "next/link";
import dynamic from "next/dynamic";
// import CloudinaryVideo from "./video/CloudinaryVideo";
const CloudinaryVideo = dynamic(() => import("./video/CloudinaryVideo"), {
  ssr: false,
});
const HeroButtons = dynamic(() => import("./Client/HeroButtons"), {
  ssr: false,
});
export default async function Hero() {
  return (
    <>
      <div className=" flex flex-wrap flex-row w-full h-full lg:flex-nowrap items-center justify-between gap-8">
        <div className="text-blue-140 space-y-4 md:space-y-10 w-full">
          <div className="space-y-5 text-[#01A0C6] w-full">
            <p className="text-center text-[#A0CBD5]">Web, Apps, and Growth — All in One Place</p>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center max-w-screen-lg mx-auto">
              <h1 className="text-[#01A0C6] tracking-wide leading-snug">
                Empowering Growth Through Innovation, Technology, and Learning Experiences for Individuals and Businesses
              </h1>
            </div>
            <p className="text-center text-sm max-w-[900px] mx-auto text-[#A0CBD5]">Essenceware, we don’t just build technology—we build partnerships. Our success is measured by the growth and satisfaction of the clients we serve.</p>
          </div>
        </div>
      </div>
    </>
  );
}
