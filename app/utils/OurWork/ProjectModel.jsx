"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../../assets/logo2.png";
import { Fragment, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RequestPricingModal from "../requestPricing/RequestPricingModal";

export default function ProjectModal({
  isOpen,
  setIsOpen,
  Casestudy,
  index,
  setIndex,
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  function closeModal() {
    if (isDesktop) {
      return setIsOpen(false);
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 px-4 b" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-650/40" />
        </Transition.Child>

        <div className="fixed px-4 py-2 inset-0 overflow-y-auto">
          <div
            onClick={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(false)}
            className="w-full flex justify-end z-50 absolute outline-none top-6 2xl:top-10 right-5 lg:right-24 1xl:right-72"
          >
            <button
              className="outline-none bg-white p-4 rounded-full"
              onTouchStart={() => setIsOpen(false)}
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.3327 28.3334L1.66602 1.66669M28.3327 1.66669L1.66602 28.3334"
                  stroke="black"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="flex h-[98vh] items-center justify-center text-center flex-col">
            <div className="absolute rounded-full z-50 top-[50%] w-full">
              <div className="max-w-4xl mx-auto lg:px-16 flex justify-between items-center px-2">
                <div
                  onClick={(e) =>
                    setIndex((pre) => {
                      if (pre === 0) {
                        return Casestudy?.length - 1;
                      }
                      return pre - 1;
                    })
                  }
                  className="w-11 h-11 cursor-pointer rounded-full flex items-center justify-center bg-blue-150/80"
                >
                  <button>
                    <SlArrowLeft className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div
                  onClick={(e) =>
                    setIndex((pre) => {
                      if (pre === Casestudy?.length - 1) {
                        return 0;
                      }
                      return pre + 1;
                    })
                  }
                  className="w-11 h-11 cursor-pointer  rounded-full flex items-center justify-center bg-blue-150/80"
                >
                  <button>
                    <SlArrowRight className="w-4 h-4  text-white" />
                  </button>
                </div>
              </div>
            </div>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-full max-w-3xl transform overflow-auto bg-white rounded-md pb-5 mt-20 text-left align-middle shadow-xl transition-all">
                <div className="sticky bg-white top-0 flex gap-4 items-center justify-between py-5 border-b px-5">
                  <div className="w-28 h-12">
                    <Image
                      priority={true}
                      src={logo}
                      alt="logo"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="" onClick={(e) => setIsChatOpen(true)}>
                    <button className="bg-blue-150 rounded-lg text-white py-1.5 xl:py-2 px-3 xl:px-4 gap-2 items-center font-semibold">
                      Request pricing
                    </button>
                  </div>
                </div>

                <div className="px-5 h-full text-blue-140">
                  <div className="w-full py-5">
                    <div className=" space-y-5">
                      <div className="space-y-2.5">
                        <h1 className="font-semibold text-xl">
                          {Casestudy[index]?.title}
                        </h1>
                        <p className="text-gray-450 text-sm">
                          {Casestudy[index]?.intro}
                        </p>
                      </div>
                      <div className="">
                        {Casestudy[index]?.detailImages.map(
                          (detailImage, index) => (
                            <Image
                              priority={true}
                              key={index}
                              src={detailImage}
                              alt={detailImage.title || "DETAIL IMAGE"}
                              width={1000}
                              height={1000}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <RequestPricingModal
                  isOpen={isChatOpen}
                  setIsOpen={setIsChatOpen}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
