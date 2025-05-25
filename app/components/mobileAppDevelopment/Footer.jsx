"use client";
import Image from "next/image";
import { TbBrandFiverr } from "react-icons/tb";
import { TfiInstagram } from "react-icons/tfi";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import emailIcon1 from "../../assets/emailIcon1.svg";

export default function Footer() {
  return (
    <div className="bg-white py-12 mt-16">
      <div className="max-w-screen-1xl mx-auto px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-8">
          <div>
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp"
              }
              width={186}
              height={63.29}
              alt="logo"
            />
          </div>
          <div className="md:hidden">
            <h1 className="text-lg">Contact Us</h1>
            {/* <div className="flex items-center gap-1.5">
              <BsTelephone />
              <p>+1 (346) 296-7074</p>
            </div> */}
            <div className="flex items-center gap-1.5">
              <Image src={emailIcon1} alt="email" className="shrink-0 w-4" />
              <p>info@dusecasoftware.com</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
            <NavLink label="Home" scrollTo="#herosection" />
            <NavLink label="Industries" scrollTo="#industries" />
            <NavLink label="Consultation" scrollTo="#consultation1" />
            <NavLink label="Case studies" scrollTo="#casestudies1" />
            <NavLink label="Contact us" scrollTo="#contactus" />
            <NavLink label="Reviews" scrollTo="#reviews" />
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={"https://www.linkedin.com/company/duseca-software/"}
                target="_blank"
                aria-label="LinkedIn"
                prefetch={false}
              >
                <SlSocialLinkedin className="h-5 w-5" />
              </Link>
            </div>
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={"https://www.fiverr.com/agencies/duseca"}
                target="_blank"
                aria-label="Fiverr"
                prefetch={false}
              >
                <TbBrandFiverr className="h-5 w-5" />
              </Link>
            </div> */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={
                  "https://www.google.com/search?q=duseca&oq=duseca&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORiABBiiBDIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEINDI0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                }
                target="_blank"
                aria-label="Google"
                prefetch={false}
              >
                <SlSocialGoogle className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={"https://www.youtube.com/@dusecasoftware"}
                target="_blank"
                aria-label="YouTube"
                prefetch={false}
              >
                <SlSocialYoutube className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={"https://web.facebook.com/DusecaSoftware/"}
                target="_blank"
                aria-label="Facebook"
                prefetch={false}
              >
                <SlSocialFacebook className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150">
              <Link
                href={"https://www.instagram.com/dusecasoftware/"}
                target="_blank"
                aria-label="Instagram"
                prefetch={false}
              >
                <TfiInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ label, scrollTo }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      const yOffset = -205;
      const element = document.querySelector(scrollTo);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
    }}
    className={`cursor-pointer text-gray-750 hover:text-blue-150 duration-200 hover:scale-105 ease-in-out hover:underline`}
  >
    {label}
  </a>
);
