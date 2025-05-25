"use client";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import React, { useState } from "react";

const PricingBtn = ({ btnTitle }) => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <>
      <button
        id="serviceButton"
        onClick={() => setIsPricingOpen(true)}
        className="bg-blue-150 text-white rounded-lg font-semibold px-5 py-2.5"
      >
        {btnTitle ? btnTitle : "Request Pricing"}
      </button>
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setIsPricingOpen}
      />
    </>
  );
};

export default PricingBtn;
