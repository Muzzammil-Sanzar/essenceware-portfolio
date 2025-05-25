'use client'
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import { useState } from "react";

export default function IndustryDetailPageContactusbtn() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button className="px-5 lg:px-[34px] py-2 font-medium rounded-lg border border-blue-150 text-blue-150" onClick={e => setIsOpen(true)}>Contact us</button>
      <RequestPricingModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
