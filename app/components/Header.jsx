"use client";
import Image from "next/image";
import googleG from "@/app/assets/googleG.png";
import verified from "@/app/assets/verified.png";
import Link from "next/link";
import { useState } from "react";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import { MdStar } from "react-icons/md";
import ChatModal from "@/app/utils/chatUtils/ChatModal";
import BookMeeting from "@/app/utils/bookAMeeting/BookMeeting";

const Header = ({ activeSection, showHeader }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <>
      <div className="max-w-screen-1xl w-full mx-auto">
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex justify-between w-full items-end">
            <div className="flex items-start gap-2.5">
              <div className="relative inline-block">
                <Image
                  priority={false}
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718197599/Team%20Images/Wajahat_tesvyz.png"
                  }
                  alt="wajahat"
                  className="w-16 h-16 sm:w-[75px] sm:h-[75px] rounded-full"
                  width={1000}
                  height={1000}
                  quality={100}
                />
                <span className="absolute bottom-0 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="space-y-1">
                <div>
                  <h1 className="font-bold md:text-xl">Wajahat Malek</h1>
                  <h2 className="text-[11px] xxs:text-[12px] font-medium text-gray-350">
                    C.E.O @ Duseca Software
                  </h2>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-1.5 items-center ">
                    <div className="flex gap-0.5 items-center">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={googleG}
                        alt="google"
                        width={14}
                        height={14}
                      />
                      <span className="text-[12px] text-gray-150 font-medium">
                        Certified
                      </span>
                      <div className="hidden xxs:block">
                        <Image
                          priority={false}
                          loading="lazy"
                          src={verified}
                          alt="verified"
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-x-1.5">
                      <div className="text-gray-140 text-sm flex items-center">
                        <MdStar className="w-4 h-4 text-blue-150" />
                        <p className="font-semibold ">5.0</p>
                        <Link href={"#Reviews"}>
                          <p className="pl-1 underline">(458)</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidden">
                    {/* <Link href={'/chat'}> */}
                    <button
                      // onClick={(e) => setIsChatOpen(true)}
                      onClick={handleChatMe}
                      className="text-white text-xs md:text-sm font-semibold flex items-center gap-1.5 bg-blue-150 px-3 py-2 rounded-lg relative"
                    >
                      <div className="w-[8px] h-[8px] rounded-full bg-[#11ff00]" />
                      Chat with me
                      <div className="absolute z-50 rounded-full w-4 h-4 -top-1.5 -right-1.5 bg-[#FF2F2F] ">
                        <span className="w-full h-full shrink-0 rounded-full bg-[#FF2F2F] text-white text-[11px] font-semibold flex items-center justify-center">
                          2
                        </span>
                      </div>
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden ">
              <div className="md:hidden space-y-1.5">
                <button
                  className="text-white text-[11px] xxs:text-xs font-semibold flex items-center gap-1.5 bg-blue-150 px-3 py-2 rounded-lg whitespace-nowrap justify-between relative"
                  onClick={handleChatMe}
                // onClick={(e) => setIsChatOpen(true)}
                >
                  <div className="w-[6px] h-[6px] xxs:w-[8px] xxs:h-[8px] rounded-full bg-[#11ff00]" />
                  Chat with us
                  <div className="absolute z-50 rounded-full w-4 h-4 -top-1.5 -right-1.5 bg-[#FF2F2F] ">
                    <span className="w-full h-full shrink-0 rounded-full bg-[#FF2F2F] text-white text-[11px] font-semibold flex items-center justify-center">
                      2
                    </span>
                  </div>
                </button>
                <button
                  onClick={(e) => setisOpen(true)}
                  className="text-[11px] xxs:text-xs w-full font-semibold bg-blue-150 flex items-center gap-1.5 text-white px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.2933 6.50501C22.4287 6.59655 22.5396 6.7199 22.6164 6.86425C22.6931 7.0086 22.7332 7.16955 22.7333 7.33301V16.6663C22.7333 16.8298 22.6932 16.9908 22.6165 17.1351C22.5398 17.2795 22.4289 17.4029 22.2936 17.4944C22.1582 17.586 22.0024 17.643 21.8399 17.6604C21.6773 17.6778 21.513 17.6552 21.3613 17.5943L14.6946 14.9277C14.4563 14.8238 14.2679 14.6312 14.1692 14.3908C14.0704 14.1503 14.0692 13.8808 14.1658 13.6395C14.2624 13.3982 14.4491 13.2039 14.6865 13.0979C14.9238 12.9919 15.1931 12.9825 15.4373 13.0717L20.7333 15.189V8.81035L15.4373 10.9277C15.1931 11.0169 14.9238 11.0075 14.6865 10.9015C14.4491 10.7955 14.2624 10.6012 14.1658 10.3599C14.0692 10.1185 14.0704 9.84908 14.1692 9.60861C14.2679 9.36814 14.4563 9.17556 14.6946 9.07168L21.3613 6.40501C21.5132 6.34403 21.6777 6.32126 21.8404 6.3387C22.0032 6.35613 22.1591 6.41324 22.2946 6.50501H22.2933Z"
                      fill="#FFFFFF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.06673 5.66699C2.97833 5.66699 2.89354 5.70211 2.83103 5.76462C2.76852 5.82714 2.7334 5.91192 2.7334 6.00033V18.0003C2.7334 18.1843 2.88273 18.3337 3.06673 18.3337H13.7334C13.8218 18.3337 13.9066 18.2985 13.9691 18.236C14.0316 18.1735 14.0667 18.0887 14.0667 18.0003V6.00033C14.0667 5.91192 14.0316 5.82714 13.9691 5.76462C13.9066 5.70211 13.8218 5.66699 13.7334 5.66699H3.06673ZM0.733398 6.00033C0.733398 4.71233 1.77873 3.66699 3.06673 3.66699H13.7334C15.0214 3.66699 16.0667 4.71233 16.0667 6.00033V18.0003C16.0667 18.6192 15.8209 19.2127 15.3833 19.6502C14.9457 20.0878 14.3522 20.3337 13.7334 20.3337H3.06673C2.76031 20.3337 2.4569 20.2733 2.1738 20.156C1.89071 20.0388 1.63349 19.8669 1.41682 19.6502C0.979231 19.2127 0.733398 18.6192 0.733398 18.0003V6.00033Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  Book a call
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex flex-col gap-2 hidden">
            <button
              // onClick={(e) => setIsChatOpen(true)}
              onClick={handleChatMe}
              className="text-white text-sm xxs:text-sm font-semibold flex items-center gap-1.5 bg-blue-150 px-5 py-2 rounded-lg whitespace-nowrap relative"
            >
              <div className="w-[6px] h-[6px] xxs:w-[8px] xxs:h-[8px] rounded-full bg-[#11ff00]" />
              Chat with us
              <div className="absolute z-50 rounded-full w-4 h-4 -top-1.5 -right-1.5 bg-[#FF2F2F] ">
                <span className="w-full h-full shrink-0 rounded-full bg-[#FF2F2F] text-white text-[11px] font-semibold flex items-center justify-center">
                  2
                </span>
              </div>
            </button>
            <button
              onClick={(e) => setisOpen(true)}
              className="bg-blue-150 text-sm w-full xxs:text-sm font-semibold flex justify-center items-center gap-1.5 text-white px-5 py-2 rounded-lg whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2933 6.50501C22.4287 6.59655 22.5396 6.7199 22.6164 6.86425C22.6931 7.0086 22.7332 7.16955 22.7333 7.33301V16.6663C22.7333 16.8298 22.6932 16.9908 22.6165 17.1351C22.5398 17.2795 22.4289 17.4029 22.2936 17.4944C22.1582 17.586 22.0024 17.643 21.8399 17.6604C21.6773 17.6778 21.513 17.6552 21.3613 17.5943L14.6946 14.9277C14.4563 14.8238 14.2679 14.6312 14.1692 14.3908C14.0704 14.1503 14.0692 13.8808 14.1658 13.6395C14.2624 13.3982 14.4491 13.2039 14.6865 13.0979C14.9238 12.9919 15.1931 12.9825 15.4373 13.0717L20.7333 15.189V8.81035L15.4373 10.9277C15.1931 11.0169 14.9238 11.0075 14.6865 10.9015C14.4491 10.7955 14.2624 10.6012 14.1658 10.3599C14.0692 10.1185 14.0704 9.84908 14.1692 9.60861C14.2679 9.36814 14.4563 9.17556 14.6946 9.07168L21.3613 6.40501C21.5132 6.34403 21.6777 6.32126 21.8404 6.3387C22.0032 6.35613 22.1591 6.41324 22.2946 6.50501H22.2933Z"
                  fill="#FFFFFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.06673 5.66699C2.97833 5.66699 2.89354 5.70211 2.83103 5.76462C2.76852 5.82714 2.7334 5.91192 2.7334 6.00033V18.0003C2.7334 18.1843 2.88273 18.3337 3.06673 18.3337H13.7334C13.8218 18.3337 13.9066 18.2985 13.9691 18.236C14.0316 18.1735 14.0667 18.0887 14.0667 18.0003V6.00033C14.0667 5.91192 14.0316 5.82714 13.9691 5.76462C13.9066 5.70211 13.8218 5.66699 13.7334 5.66699H3.06673ZM0.733398 6.00033C0.733398 4.71233 1.77873 3.66699 3.06673 3.66699H13.7334C15.0214 3.66699 16.0667 4.71233 16.0667 6.00033V18.0003C16.0667 18.6192 15.8209 19.2127 15.3833 19.6502C14.9457 20.0878 14.3522 20.3337 13.7334 20.3337H3.06673C2.76031 20.3337 2.4569 20.2733 2.1738 20.156C1.89071 20.0388 1.63349 19.8669 1.41682 19.6502C0.979231 19.2127 0.733398 18.6192 0.733398 18.0003V6.00033Z"
                  fill="#FFFFFF"
                />
              </svg>
              Book a call
            </button>
          </div>
        </div>
        <div className="w-full border-b-[1px] border-blue-110/[44%] sm:mt-2.5 xl:mt-0">
          <div className="overflow-x-auto 1xl:overflow-visible custom-scroll">
            <div className="flex gap-8 mt-0 md:mt-3 items-center md:justify-center lg:text-base text-sm text-gray-350 w-full whitespace-nowrap">
              <NavLink
                label="Home"
                scrollTo=".hero"
                isActive={activeSection === "Home"}
              />
              <NavLink
                label="About Us"
                scrollTo=".about-section"
                isActive={activeSection === "about"}
              />
              <NavLink
                label="Consultations"
                scrollTo=".consultation-section"
                isActive={activeSection === "consultation"}
              />
              <NavLink
                label="App industries"
                scrollTo=".appIndustries"
                isActive={activeSection === "appIndustries"}
              />
              {/* </p> */}
              <NavLink
                label="Portfolio"
                scrollTo=".work-section"
                isActive={activeSection === "work"}
              />
              <NavLink
                label="Services"
                scrollTo=".service-section"
                isActive={activeSection === "service"}
              />
              <NavLink
                label="Reviews"
                scrollTo=".reviews-section"
                isActive={activeSection === "reviews"}
              />
            </div>
          </div>
        </div>
      </div>

      <ChatModal isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setIsPricingOpen}
      />
      <BookMeeting isOpen={isOpen} setIsOpen={setisOpen} />
    </>
  );
};
const NavLink = ({ label, scrollTo, isActive }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      const yOffset = -220;
      const element = document.querySelector(scrollTo);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      // document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
    }}
    className={`pb-2 md:mt-0 mt-6 text-xs lg:text-sm font-medium ${isActive
        ? "text-blue-150 border-b-[2.5px] border-blue-150"
        : "text-gray-350 hover:text-blue-150 transition duration-300"
      }`}
  >
    {label}
  </a>
);

export default Header;
