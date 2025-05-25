"use client";
import Image from "next/image";
import industryData from "../mobileAppDevelopment/IndustrySectionData.json";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function IndustriesSection() {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [visibleItems, setVisibleItems] = useState(8);

  const handleSeeMore = () => {
    setItemsToShow(industryData.length);
  };

  useEffect(() => {
    if (itemsToShow > 8) {
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev >= itemsToShow) {
            clearInterval(interval);
            return prev;
          }
          return prev + 4;
        });
      }, 200); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [itemsToShow]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[32px] font-semibold">Industries</h1>
        <p className="font-medium text-[#928F8F]">
          We make awesome apps just like these, and yes, they are all
          custom-coded
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9">
        {industryData &&
          industryData.slice(0, visibleItems).map((industry, index) => (
            <Link key={index} href={`/custom-mobile-app-development/${industry?.key}`}>
              <div className="space-y-4 hover:drop-shadow-lg duration-200 cursor-pointer hover:p-[1px] ease-linear">
                <div className="bg-blue-150 bg-opacity-15 rounded-xl px-[26px] py-[36px]">
                  <Image
                    src={industry?.image}
                    width={1000}
                    height={175.62}
                    alt="industry"
                  />
                </div>
                <h1 className="font-medium text-xl text-center">
                  {industry?.name}
                </h1>
              </div>
            </Link>
          ))}
      </div>
      <div className="text-center">
        {itemsToShow <= 8 && (
          <button
            onClick={handleSeeMore}
            className="px-11 py-1.5 rounded-lg border border-[#E3DDDD] font-medium"
          >
            See more
          </button>
        )}
      </div>
    </div>
  );
}
