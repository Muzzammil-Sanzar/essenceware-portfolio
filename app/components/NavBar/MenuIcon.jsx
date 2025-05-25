"use client";
import AppIndustriesDrop from "@/app/utils/navbar/AppIndustriesDrop";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import logo1 from "@/app/assets/logo2.png";

export default function MenuIcon() {
  const [showMenu, setshowMenu] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  useEffect(() => {
    const element = document.getElementById("custom-video");
    if (showMenu) {
      element?.classList?.add("hidden");
      return;
    }
    element?.classList?.remove("hidden");
  }, [showMenu]);

  return (
    <>
      <div className="lg:hidden">
        <button
          className="bg-[#1D7CCF] bg-opacity-35 border border-blue-150/20 rounded-md p-4 "
          onClick={() => setshowMenu(true)}
        >
          <FaBars className="text-white" />
        </button>
      </div>
      {showMenu && (
        <div className="relative z-[100] overflow-hidden">
          <div
            className="fixed inset-0 bg-gray-800 opacity-25"
            onClick={(e) => setshowMenu(false)}
          ></div>
          <nav
            className={`fixed h-screen top-0 right-0 bottom-0 flex flex-col justify-between w-80 py-6 px-6 bg-white border-r overflow-y-auto transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div>
              <div className="flex items-center mb-5 justify-between">
                <Link href={"/"}>
                  <div>
                    <Image
                      priority={false}
                      loading="lazy"
                      src={logo1}
                      alt="logo"
                      width={186}
                    />
                  </div>
                </Link>
                <button
                  className="navbar-close"
                  onClick={() => setshowMenu(false)}
                >
                  <RxCross2 className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-6">
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link href={"/"} className="flex items-center gap-1">
                    <GoHomeFill />
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link onClick={() => setshowMenu(false)} href={"#process"}>
                    Process
                  </Link>
                </li>
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link
                    onClick={() => setshowMenu(false)}
                    href={"#consultation"}
                  >
                    Consultations
                  </Link>
                </li>

                <li>
                  <AppIndustriesDrop text={"text-gray-350"} />
                </li>
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link onClick={() => setshowMenu(false)} href={"#portfolio"}>
                    Portfolio
                  </Link>
                </li>
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link onClick={() => setshowMenu(false)} href={"#team"}>
                    About Us
                  </Link>
                </li>
                <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105">
                  <Link onClick={() => setshowMenu(false)} href={"#reviews"}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="pt-6">
                <button
                  onClick={(e) => setIsPricingOpen(true)}
                  className="block px-4 py-2 mb-2 w-full leading-loose text-base text-center text-white font-semibold bg-blue-150 hover:bg-blue-700  rounded-xl"
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
    </>
  );
}
