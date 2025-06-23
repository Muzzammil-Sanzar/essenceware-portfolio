import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// import AppIndustriesDrop from "@/utils/navbar/AppIndustriesDrop";
import AppIndustriesDrop from "@/app/utils/navbar/AppIndustriesDrop";
import { GoHomeFill } from "react-icons/go";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
const Navbar = ({ activeSection }) => {
  const [nav, setNav] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const handleMenu = () => {
    setshowMenu(true);
  };
  const closeMenu = () => {
    setshowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setshowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white items-center border-b-[1.5px] border-blue-150/30 pt-4 pb-2">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              priority={false}
              loading="lazy"
              src={logo}
              alt="logo"
              width={230}
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="lg:flex hidden text-xs lg:text-sm gap-3 xl:gap-5 items-center text-gray-150 ">
          {/* {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer text-base font-medium text-gray-350">
              <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                {link}
              </Link>
            </li>
          ))} */}
          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            <NavLink
              icon={<GoHomeFill />}
              label="Home"
              scrollTo=".hero"
              isActive={activeSection === "hero"}
            />
            {/* <Link
              onClick={() => setNav(!nav)}
              href={"#hero"}
              className="flex items-center gap-1"
            >
              <GoHomeFill />
              Home
            </Link> */}
          </li>
          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            {/* <Link onClick={() => setNav(!nav)} href={'#About Us'}>
              About Us
            </Link> */}
            <NavLink
              label="About Us"
              scrollTo=".about-section"
              isActive={activeSection === "about"}
            />
          </li>
          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            {/* <Link onClick={() => setNav(!nav)} href={'#Free Consultation'}>
              Consultations
            </Link> */}
            <NavLink
              label="Consultations"
              scrollTo=".consultation-section"
              isActive={activeSection === "consultation"}
            />
          </li>
          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            {/* <Link onClick={() => setNav(!nav)} href={'#Our Work'}>
              Portfolio
            </Link> */}
            <NavLink
              label="Courses"
              scrollTo=".work-section"
              isActive={activeSection === "work"}
            />
          </li>
          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            {/* <Link onClick={() => setNav(!nav)} href={'#Services'}>
              Services
            </Link> */}
            <NavLink
              label="Services"
              scrollTo=".service-section"
              isActive={activeSection === "service"}
            />
          </li>

          <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
            {/* <Link onClick={() => setNav(!nav)} href={'#Reviews'}>
              Reviews
            </Link> */}
            <NavLink
              label="Reviews"
              scrollTo=".reviews-section"
              isActive={activeSection === "reviews"}
            />
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => setIsPricingOpen(true)}
            className="bg-blue-150 rounded-lg text-white py-1.5 xl:py-3 px-3 xl:px-6 lg:flex hidden gap-2 items-center font-semibold"
          >
            Request pricing
          </button>
        </div>
        <div className="lg:hidden">
          <button className="bg-blue-150 rounded-md p-4 " onClick={handleMenu}>
            <FaBars className="text-white" />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="relative z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-gray-900 opacity-25"
            onClick={closeMenu}
          ></div>
          <nav
            className={`fixed top-0 right-0 bottom-0 flex flex-col w-80 py-6 px-6 bg-white border-r overflow-y-auto transform transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center mb-8 justify-between">
              <div>
                <Image
                  priority={false}
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  width={186}
                />
              </div>
              <button className="navbar-close" onClick={closeMenu}>
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <ul className="space-y-6">
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#hero"}
                  className="flex items-center gap-1"
                >
                  <GoHomeFill />
                  Home
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setNav(!nav)} href={"#About Us"}>
                  About Us
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setNav(!nav)} href={"#Free Consultation"}>
                  Consultations
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setNav(!nav)} href={"#OurWork"}>
                  Courses
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setNav(!nav)} href={"#Services"}>
                  Services
                </Link>
              </li>
              <li onClick={() => setNav(!nav)}>
                <AppIndustriesDrop />
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                <Link onClick={() => setNav(!nav)} href={"#Reviews"}>
                  Reviews
                </Link>
              </li>
            </ul>
            <div className="mt-auto">
              <div className="pt-6">
                <button
                  onClick={(e) => setIsPricingOpen(true)}
                  className="block px-4 py-1.5 mb-2 w-full leading-loose  text-center text-white font-semibold bg-blue-150 hover:bg-blue-700  rounded-xl"
                >
                  Request pricing
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setIsPricingOpen}
      />
    </div>
  );
};

const NavLink = ({ icon, label, scrollTo, isActive }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      const yOffset = -376;
      const element = document.querySelector(scrollTo);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
    }}
    className={`flex items-center gap-1 pb-2 md:mt-0 mt-6 text-xs lg:text-sm font-medium ${
      isActive
        ? "text-blue-150 font-medium"
        : "text-gray-350 hover:text-blue-150 transition ease-in-out duration-500"
    }`}
  >
    {icon} {label}
  </a>
);

export default Navbar;
