"use client";
import React, { useState } from "react";
import RequestPricingModal from "./RequestPricingModal";

export default function PricingBtn() {
  const [isPricingOpen, setisPricingOpen] = useState(false);
  return (
    <>
      <button
        onClick={(e) => setisPricingOpen(true)}
        className="whitespace-nowrap py-2.5 px-[18px]  bg-[#0769BE] rounded-lg text-white font-semibold"
        type="button"
      >
        GET IN TOUCH
      </button>
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setisPricingOpen}
      />
    </>
  );
}
