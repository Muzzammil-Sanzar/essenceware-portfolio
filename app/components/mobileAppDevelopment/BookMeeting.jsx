"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsChat } from "react-icons/bs";

export default function BookMeeting({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-650/65" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full h-screen items-center justify-center text-center flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full z-50 bg-white relative max-w-2xl my-7 transform overflow-hidden rounded-2xl shadow-xl transition-all custom-scrollbar">
                  <button
                    className="flex justify-center items-center bg-blue-150 backdrop-blur-md bg-opacity-10 z-50 p-1 rounded-full w-10 h-10 hover:scale-110 absolute outline-none top-3 right-5 "
                    onClick={closeModal}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 30 30"
                      fill="#1D7CCF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.3327 28.3334L1.66602 1.66669M28.3327 1.66669L1.66602 28.3334"
                        stroke="black"
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div className="w-full h-[80vh]">
                    <div className="calendly-inline-widget h-full" data-url="https://calendly.com/dusecasoftware/mobile-app-consultation"></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
