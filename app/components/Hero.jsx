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
      <div className="pt-8 md:pt-10 lg:pt-20 flex flex-wrap flex-row lg:flex-nowrap items-center justify-between gap-8">
        <div className="text-blue-140 space-y-4 md:space-y-10">
          {/* <Image
            priority={false}
            loading="lazy"
            src={
              "https://res.cloudinary.com/dprxdqfxc/image/upload/v1719218406/Badge/1_hkxusr.png"
            }
            alt="logo"
            className=""
            width={230}
            height={100}
            quality={100}
             /> */}
          <div className="space-y-2">
            <h1 className="font-medium text-sm sm:text-base  text-blue-140 mb-3">
              Web, Apps, and Growth — All in One Place {" "}
              <span className="text-[12px] sm:text-sm">Essenceware</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-5xl font-semibold max-w-[525px] md:leading-10">
              <span className="text-blue-150">Essenceware</span> – Mobile & Web Innovation, & Skills Development
            </p>
          </div>
          <HeroButtons />
        </div>
        <div className="md:hidden lg:block relative h-full max-w-[700px]">
          <Image
            priority={false}
            loading="lazy"
            src={hero}
            alt="hero"
            className="max-w-[700px] w-full hidden  "
          />
          <div className=" w-full 1xl:h-[375px] rounded sm:rounded-lg lg:rounded-2xl overflow-hidden mb-5">
            <CloudinaryVideo />
          </div>
        </div>
      </div>
    </>
  );
}
