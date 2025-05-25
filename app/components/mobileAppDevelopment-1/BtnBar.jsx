"use client";
import React, { useState } from "react";
import ChatModal from "@/app/utils/chatUtils/ChatModal";
// import BookMeeting from "../mobileAppDevelopment/BookMeeting";

export default function BtnBar() {
  const [isChat, setIsChat] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <div
          // onClick={(e) => setIsChat(true)}
          onClick={handleChatMe}
          className="font-semibold cursor-pointer flex items-center justify-center gap-2 lg:w-[186px] bg-blue-150 text-white rounded-lg px-4  py-3"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="9"
              height="9"
              rx="4.5"
              fill="#11ff00"
              fillOpacity="0.89"
            />
          </svg>
          <p>Talk to an Expert</p>
        </div>
        {/* <div
          onClick={(e) => setIsBooking(true)}
          className="font-semibold flex bg-blue-150 cursor-pointer items-center text-white gap-2 rounded-lg px-5 py-3"
        >
          <svg
            width="24"
            height="24"
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
          <p>Book a meeting</p>
        </div> */}
      </div>
      <ChatModal isOpen={isChat} setIsOpen={setIsChat} />
      {/* <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} /> */}
    </>
  );
}
