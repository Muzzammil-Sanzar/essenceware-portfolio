"use client";
import { ceos } from "@/app/data/TeamMembers";
import MemberDetail from "./MemberDetail";
import { useState } from "react";
import Image from "next/image";

export default function AboutUsCeos() {
  const [seletedMember, setSelectedMember] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const openDetailModal = (member) => {
    setIsDetailModalOpen(true);
    setSelectedMember(member);
  };
  const closeDetailModal = () => setIsDetailModalOpen(false);
  return (
    <>
      {ceos.map((member, index) => (
        <div key={index} className="embla__slide11 cursor-pointer" onClick={() => openDetailModal(member)}>
          <div className="h-full md:px-3">
            <div
              // onClick={(e) => openDetailModal(member)}
              className={`flex flex-col lg:px-8 `}
            >
              <div className="flex items-center gap-3">
                <Image
                  priority={false}
                  loading="lazy"
                  src={member.imageSrc}
                  alt={member.name}
                  className="lg:w-16 lg:h-16 w-11 h-11 rounded-full ring ring-blue-150/15"
                  width={64}
                  height={64}
                />
                <div>
                  <h1 className="lg:text-lg text-base text-gray-140 font-semibold whitespace-nowrap">
                    {member.name}
                  </h1>
                  <p className="text-gray-140 lg:text-base text-xs">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="text-base  text-gray-450 mt-6 line-clamp-2">
                  {member.bio}
                </span>
                <span className="absolute bottom-0 right-0 bg-white text-gray-450  text-sm cursor-pointer text-right">
                  ... <span className="underline">Read more</span>
                </span>
                <div className="flex justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <MemberDetail
        isOpen={isDetailModalOpen}
        closeModal={closeDetailModal}
        member={seletedMember}
      />
    </>
  )
}
