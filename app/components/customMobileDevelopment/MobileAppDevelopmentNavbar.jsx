"use client";
import Image from "next/image";
import emailIcon from "../../assets/emailIcon.svg";
import chatIcon from "../../assets/chatIcon.svg";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import burgermenue from "@/app/assets/burgermenue.svg";
import { BsTelephone } from "react-icons/bs";

export default function MobileAppDevelopmentNavbar() {
  const [showMenu, setshowMenu] = useState(false);
  const handleMenu = () => {
    setshowMenu(true);
  };
  const closeMenu = () => {
    setshowMenu(false);
  };

  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-blue-150 text-white font-medium w-full ">
        <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="text-xs">
              <h1>We Make Awesome Apps</h1>
            </div>
            <div className="flex items-center gap-3 text-xs">
              {/* <div className="sm:flex items-center gap-1 hidden">
                <BsTelephone className="w-[18px] h-[18px]" />
                <p>+1 (346) 296-7074</p>
              </div> */}
              <div className="flex items-center gap-1">
                <Image src={emailIcon} alt="email" />
                <p>info@dusecasoftware.com</p>
              </div>
              {/* <div
                onClick={handleChatMe}
                className="lg:flex items-center gap-1 hidden cursor-pointer"
              >
                <Image src={chatIcon} width={24} height={24} alt="live chat" />
                <p>Live Chat</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer">
              <Link href={"/custom-mobile-development"}>
                <Image
                  src={
                    "https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp"
                  }
                  width={186}
                  height={63.29}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="lg:flex items-center gap-8 text-sm font-medium text-[#555555] hidden">
              <Link href={"/custom-mobile-development"}>
                <p className="cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline">
                  Home
                </p>
              </Link>
              <NavLink label="Industries" scrollTo="#industries" />
              <NavLink label="Consultation" scrollTo="#consultation1" />
              <NavLink label="Case studies" scrollTo="#casestudies1" />
              <NavLink label="Contact us" scrollTo="#contactus" />
              <NavLink label="Reviews" scrollTo="#reviews" />
              {/* <p className="cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline">Portfolio</p> */}
              {/* <p className="cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline">Case studies</p> */}
              {/* <p className="cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline">Team</p> */}
              {/* <p className="cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline">Reviews</p> */}
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const yOffset = -170;
                  const element = document.querySelector("#contactus");
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                  // document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
                }}
                className="px-[34px] py-2 font-medium rounded-lg bg-blue-150 text-white hidden lg:block"
              >
                GET IN TOUCH
              </button>
            </div>
            <div className="lg:hidden">
              <button
                className="bg-blue-150 rounded-xl p-1"
                onClick={handleMenu}
              >
                <Image
                  src={burgermenue}
                  width={40}
                  height={40}
                  alt="buger menue"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="relative z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-gray-900 opacity-25"
            onClick={closeMenu}
          ></div>
          <nav
            className={`fixed top-0 right-0 bottom-0 flex flex-col w-80 py-6 px-6 bg-white border-r overflow-y-auto transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex items-center mb-8 justify-between">
              <div>
                <Image
                  priority={false}
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp"
                  }
                  alt="logo"
                  width={186}
                  height={63.29}
                />
              </div>
              <button className="navbar-close" onClick={closeMenu}>
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <ul className="space-y-6">
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link
                  onClick={() => setshowMenu(false)}
                  href={"#hero"}
                  className="flex items-center gap-1"
                >
                  <GoHomeFill />
                  Home
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setshowMenu(false)} href={"#industries"}>
                  Industries
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link
                  onClick={() => setshowMenu(false)}
                  href={"#consultation1"}
                >
                  Consultations
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setshowMenu(false)} href={"#casestudies1"}>
                  Case studies
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setshowMenu(false)} href={"#contactus"}>
                  Contact us
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setshowMenu(false)} href={"#reviews"}>
                  Reviews
                </Link>
              </li>
            </ul>
            {/* <div className="mt-auto">
              <div className="pt-6">
                <button
                  onClick={(e) => setIsPricingOpen(true)}
                  className="block px-4 py-1.5 mb-2 w-full leading-loose  text-center text-white font-semibold bg-blue-150 hover:bg-blue-700  rounded-xl"
                >
                  Request pricing
                </button>
              </div>
            </div> */}
          </nav>
        </div>
      )}
    </div>
  );
}

const NavLink = ({ label, scrollTo }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      const yOffset = -170;
      const element = document.querySelector(scrollTo);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
    }}
    className={`cursor-pointer hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline`}
  >
    {label}
  </a>
);
