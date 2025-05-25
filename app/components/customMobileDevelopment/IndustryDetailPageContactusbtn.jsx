'use client'
import { useState } from "react";
import RequestPricingModal from "./RequestPricingModal";

export default function IndustryDetailPageContactusbtn() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button className="md:px-5 px-2.5 lg:px-[34px] py-1.5 md:py-2 font-medium rounded-lg bg-blue-150 text-white" onClick={e => setIsOpen(true)}>GET IN TOUCH</button>
      <RequestPricingModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
