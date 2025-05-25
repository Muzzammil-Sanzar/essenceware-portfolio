"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  allMembers,
  developmentMembers,
  projectManagers,
  designMembers,
  salesMembers,
} from "@/app/data/TeamMembers";
import Image from "next/image";
import logo from "@/app/assets/logo2.png";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";

// const salesMembers = [
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
// ];
// const designMembers = [
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
// ];
// const developmentMembers = [
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
// ];
// const projectManagers = [
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
//   {
//     name: "Zayd Rizvi",
//     role: "C.O.O",
//     bio: "CEO’s aim is to position DUSECA as a customer-centric leader in the digital industry, providing cutting-edge innovative Software Solutions and exceptional experiences.",
//     imageSrc: zayd,
//   },
// ];

export default function TeamModal({ isOpen, setIsOpen }) {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Members");
  const teamCategories = {
    "All Members": allMembers,
    Developers: developmentMembers,
    Designers: designMembers,
    "Project Managers": projectManagers,
    "Business Developers": salesMembers,
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-650/65" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <button
              className="flex justify-end absolute outline-none top-4 2xl:top-16 right-5 "
              onClick={closeModal}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.3327 28.3334L1.66602 1.66669M28.3327 1.66669L1.66602 28.3334"
                  stroke="white"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="flex min-h-full h-screen items-center justify-center text-center flex-col">
              <Transition.Child
                as={Fragment}
                enter="transition-transform ease-out duration-500"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition-transform ease-in duration-200"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden rounded-t-[40px] bg-white px-6 md:px-8 pt-8 mt-20 2xl:mt-28 overflow-y-auto text-left align-middle shadow-xl transition-all">
                  <div className="bg-white h-full text-blue-140 overflow-y-auto custom-scroll space-y-2">
                    <div className="flex justify-center items-center gap-4">
                      <div className="h-12 md:h-20 md:w-48">
                        <Image
                          priority={false}
                          loading="lazy"
                          src={logo}
                          alt="logo"
                          className="object-contain w-full h-full"
                        />
                      </div>
                      {/* <div>
                        <button onClick={e => setIsPricingOpen(true)} className="bg-blue-150 rounded-lg text-sm xl:text-base text-white whitespace-nowrap py-3 px-4 flex  gap-2 items-center font-semibold mb-2">
                          Request pricing
                        </button>
                      </div> */}
                    </div>
                    <div className="overflow-x-auto custom-scroll pb-10">
                      <div className="flex items-end pb-2 lg:justify-center lg:text-base text-[12px] text-gray-350 whitespace-nowrap overflow-x-auto custom-scroll">
                        {Object.keys(teamCategories).map((category, index) => (
                          <button
                            key={index}
                            onClick={() => handleCategoryChange(category)}
                            className={`pb-2 md:mt-0 mt-4 lg:px-8 px-4 ${
                              selectedCategory == category
                                ? "text-blue-150 border-b-2 border-blue-110"
                                : "text-gray-350 border-b-2 border-blue-110/[44%]"
                            } font-semibold hover:text-blue-150 transition duration-300`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-10">
                      {teamCategories[selectedCategory].map((member, index) => (
                        <div
                          key={index}
                          className="flex flex-col md:pe-4 md:ps-9 md:border-l md:border-blue-110/[44%]"
                        >
                          <div className="flex gap-4 items-center">
                            <Image
                              priority={false}
                              loading="lazy"
                              src={member.imageSrc}
                              alt={`Picture of ${member.name}`}
                              width={64}
                              height={64}
                              className="rounded-full"
                            />
                            <div>
                              <h4 className="font-semibold text-lg">
                                {member.name}
                              </h4>
                              <p className="text-sm md:text-base">
                                {member.role}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm md:text-base text-gray-450">
                            {member.bio}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setIsPricingOpen}
      />
    </>
  );
}
