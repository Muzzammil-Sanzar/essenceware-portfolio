"use client";
import BookMeeting from "@/app/utils/bookAMeeting/BookMeeting";
import ChatModal from "@/app/utils/chatUtils/ChatModal";
import React, { useState } from "react";
import { TbVideo } from "react-icons/tb";

export default function HeroButtons() {
  const [isBooking, setIsBooking] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <>
      <div className="flex gap-1.5 xxs:gap-3 font-semibold mt-4">
        <button
          onClick={handleChatMe}
          className="text-white text-sm sm:text-base flex sm:hidden items-center justify-center gap-2 bg-blue-150 px-3 py-3 whitespace-nowrap rounded-lg w-full xxs:w-[166px]"
        >
          {/* <div className="bg-[#11ff00] rounded-full h-2.5 w-2.5"></div> */}
          Request pricing
        </button>
        <button
          // onClick={(e) => setIsChatOpen(true)}
          onClick={handleChatMe}
          className="text-white text-sm sm:text-base hidden sm:flex items-center justify-center gap-2 bg-blue-150 px-3 py-3 whitespace-nowrap rounded-lg w-full xxs:w-[166px]"
        >
          {/* <div className="bg-[#11ff00] rounded-full h-2.5 w-2.5"></div> */}
          Request pricing
        </button>
        {/* </Link> */}
        <button
          onClick={(e) => setIsBooking(true)}
          className="bg-blue-150  text-sm sm:text-base flex items-center gap-1 xxs:gap-2 text-white px-3 py-2 whitespace-nowrap rounded-lg"
        >
          {/* <TbVideo className="h-6 w-6" /> */}
          Request Pricing
        </button>
      </div>
      <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} />
      <ChatModal isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
