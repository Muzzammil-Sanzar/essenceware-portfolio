"use client";
import TeamModal from "@/app/utils/TeamModal";
import React, { useState } from "react";

export default function AboutUsBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          className="text-base font-medium text-blue-150 border-b border-blue-150"
          onClick={toggleModal}
        >
          See all members (11)
        </button>
      </div>
      <TeamModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
