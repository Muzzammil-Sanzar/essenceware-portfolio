"use client";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import React, { useState } from "react";

export default function PricingBtn() {
  const [isPricingOpen, setisPricingOpen] = useState(false);
  return (
    <>
      <button
        onClick={(e) => setisPricingOpen(true)}
        className="whitespace-nowrap py-2.5 px-[18px]  bg-blue-150 rounded-lg text-white font-semibold"
        type="button"
      >
        Request pricing
      </button>
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setisPricingOpen}
      />
    </>
  );
}
