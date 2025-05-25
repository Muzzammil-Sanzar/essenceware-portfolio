import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from '../../assets/logo2.png'
import { Fragment, useState } from "react";
import HubSpotChat from "./HubSpotChat";
import ChatHeader from "./ChatHeader";
export default function ChatModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }
  return (
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
          <div className="fixed inset-0 bg-gray-650/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto custom-scroll">
          <div className="min-h-full h-screen py-16 flex items-center justify-center">

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-full max-w-3xl transform overflow-auto h-full  bg-white rounded-2xl text-left align-middle shadow-xl custom-scroll transition-all">
                {/* <ChatHeader closeModal={closeModal} /> */}
                <iframe
                  className={`bg-white drop-shadow-lg border h-full text-base`}
                  width={'100%'}
                  height={'100%'}
                  src="https://tawk.to/chat/65cb0a910ff6374032cc7be4/1hmgi2j8g"
                  frameBorder={0}
                  title={"tawk to"}
                  loading='lazy'
                  crossOrigin="*"
                />
                {/* <HubSpotChat /> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
