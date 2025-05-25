"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookMeeting from "../mobileAppDevelopment/BookMeeting";

export default function ConsultationBtn() {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <>
      <button
        id="portfolioButton"
        onClick={(e) => setIsBooking(true)}
        className="flex items-center px-4 py-2.5 bg-blue-150 rounded-lg text-white gap-2.5"
      >
        <Image
          priority={false}
          loading="lazy"
          width={24}
          height={24}
          src="./record.svg"
          alt="book"
        />
        <p>Book free consultation</p>
      </button>
      <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} />
    </>
  );
}
