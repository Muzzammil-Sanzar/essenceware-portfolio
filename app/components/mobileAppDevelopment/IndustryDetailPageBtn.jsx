"use client";
import React, { useState } from "react";
import BookMeeting from "./BookMeeting";

export default function IndustryDetailPageBtn() {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <>
      <button
        id="consultationButton"
        onClick={(e) => setIsBooking(true)}
        className="flex items-center px-5 py-3 text-white bg-[#007aff] font-medium gap-2 w-fit rounded-full"
      >
        <p className="text-lg font-medium">Book A Call</p>
      </button>
      <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} />
    </>
  );
}
