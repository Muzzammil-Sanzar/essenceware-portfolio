'use client'
import Image from "next/image";
import burgermenue from '@/app/assets/burgermenue.svg'
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function MenueIcon() {
  const [showMenu, setshowMenu] = useState(false);
  const handleMenu = () => {
    setshowMenu(true);
  };
  const closeMenu = () => {
    setshowMenu(false);
  };
  return (
    <>

      <button className="bg-blue-150 rounded-xl p-1" onClick={handleMenu}>
        <Image src={burgermenue} width={40} height={40} />
      </button>
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
                  src={'https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp'}
                  alt="logo"
                  width={186}
                  height={63.29}
                />
              </div>
              <button className="navbar-close" onClick={closeMenu}>
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <ul className="">
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-2.5">
                <Link
                  onClick={() => setshowMenu(false)}
                  href={"/custom-mobile-app-development"}
                  className="flex items-center gap-1"
                >
                  <GoHomeFill />
                  Home
                </Link>
              </li>
              {/* <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-3.5">
                <Link onClick={() => setshowMenu(false)} href={"#industries"}>
                  Industries
                </Link>
              </li> */}
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-3.5">
                <Link onClick={() => setshowMenu(false)} href={"#consultation"}>
                  Consultations
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-3.5">
                <Link onClick={() => setshowMenu(false)} href={"#process"}>
                  Process
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-3.5">
                <Link onClick={() => setshowMenu(false)} href={"#contactus"}>
                  Contact us
                </Link>
              </li>
              <li className="cursor-pointer font-medium text-gray-350 hover:text-blue-150 hover:scale-105 border-b py-3.5">
                <Link onClick={() => setshowMenu(false)} href={"#reviews"}>
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
