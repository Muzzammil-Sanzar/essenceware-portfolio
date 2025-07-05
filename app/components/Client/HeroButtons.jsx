"use client";
import BookMeeting from "@/app/utils/bookAMeeting/BookMeeting";
import ChatModal from "@/app/utils/chatUtils/ChatModal";
import Link from "next/link";
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
        <Link href="/portfolio">
          <button
            className="text-white text-sm sm:text-base flex sm:hidden items-center justify-center gap-2 bg-blue-150 px-3 py-3 whitespace-nowrap rounded-lg w-full xxs:w-[166px]"
          >
            View Courses
          </button>
        </Link>
        <Link href="/portfolio">
          <button
            className="bg-blue-150  text-sm sm:text-base hidden  sm:flex items-center gap-1 xxs:gap-2 text-white px-3 py-2 whitespace-nowrap rounded-lg"
          >
            View Courses
          </button>
        </Link>
      </div>
      {/* <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} />
      <ChatModal isOpen={isChatOpen} setIsOpen={setIsChatOpen} /> */}
    </>
  );
}
