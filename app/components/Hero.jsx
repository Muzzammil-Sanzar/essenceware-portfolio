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
        <div className="text-blue-140 space-y-4 md:space-y-6">
          <Image
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
          />
          <div>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl text-blue-140 mb-3">
              Meet Wajahat Malek,{" "}
              <span className="text-[12px] sm:text-sm">C.E.O Behind</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-[32px] font-semibold max-w-[525px] md:leading-10">
              Your <span className="text-blue-150">Trusted</span> Mobile App
              Development Company for Every Industry!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Image
                priority={false}
                loading="lazy"
                src={fiverrIcon}
                width={59}
                height={59}
                alt="fiverIcon"
              />
            </div>
            <div>
              <div className="">
                <span className="font-semibold text-[11px] bg-green-150 bg-opacity-15 text-green-150 px-2.5 rounded">
                  Best Seller
                </span>
              </div>
              <Link
                href={"https://www.fiverr.com/agencies/duseca"}
                target="__blank"
              >
                <div className="flex items-center cursor-pointer">
                  <Image
                    priority={false}
                    loading="lazy"
                    src={fiverr}
                    alt="fiverr"
                    width={63}
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
              </Link>
              <div>
                <Link href={"#Reviews"}>
                  <p className="text-[10px] font-medium text-gray-450 underline">
                    (Click to see{" "}
                    <span className="text-gray-950">458 Reviews)</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <HeroButtons />
        </div>
        <div className="md:hidden lg:block relative h-full">
          <Image
            priority={false}
            loading="lazy"
            src={hero}
            alt="hero"
            className="max-w-[700px] w-full hidden 1xl:block "
          />
          <div className="1xl:absolute top-0 max-w-[700px] w-full 1xl:h-[375px] rounded sm:rounded-lg lg:rounded-2xl overflow-hidden mb-5">
            <CloudinaryVideo />
          </div>
        </div>
      </div>
    </>
  );
}
