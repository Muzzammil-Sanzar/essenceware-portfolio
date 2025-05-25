"use client";
import BookMeeting from "@/app/utils/bookAMeeting/BookMeeting";
import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";

export default function ScheduleBtn({ text }) {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <>
      <button
        id="consultationButton"
        onClick={(e) => setIsBooking(true)}
        className="flex items-center px-4 py-2 text-white bg-blue-150 font-medium gap-2 w-fit rounded-lg"
      >
        <FiCalendar className="w-5 h-5" />
        <p>{text || "Schedule it today"}</p>
      </button>
      <BookMeeting isOpen={isBooking} setIsOpen={setIsBooking} />
    </>
  );
}
