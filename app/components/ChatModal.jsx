import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CgClose } from "react-icons/cg";
import logo from "../assets/logo1.svg";
import Image from "next/image";
export default function ChatModal({
  isOpen,
  closeModal,
  handleEmailSubmit,
  setUserEmail,
  setUserName,
  error,
  isLoading,
}) {
  if (!isOpen) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={(e) => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[590px] transform overflow-hidden rounded-2xl bg-white border border-blue-150 border-opacity-40 p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                <button className="absolute top-9 right-4" onClick={closeModal}>
                  <CgClose className="text-black h-6 w-6" />
                </button>
                <form onSubmit={handleEmailSubmit}>
                  <div className="sm:flex gap-4 items-center border-b pb-4 border-gray-160 hidden">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={logo}
                      alt="logo"
                      className="h-[90px] w-fit object-contain"
                    />
                    <div className="mt-3">
                      <h1 className="text-lg font-semibold">Message Wajahat</h1>
                      <div className="flex gap-4 mt-2">
                        <div className="text-green-150 font-semibold flex items-center gap-2">
                          <div className="bg-green-150/90 rounded-full h-[9px] w-[9px]"></div>
                          Online
                        </div>
                        <p className="text-gray-140 font-semibold hidden">
                          Avg. response time:{" "}
                          <span className="text-blue-150">20 min</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:hidden border-b pb-2">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={logo}
                      alt="logo"
                      className="h-[90px] w-fit object-contain"
                    />
                    <div className="mt-3">
                      <h1 className="text-lg font-semibold text-center">
                        Message Wajahat
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-black font-medium pt-4 text-lg">
                    We are preparing your chat with Wajahat Malek..
                  </h1>
                  <p className="text-gray-140 font-[450px] text-sm">
                    In order to proceed chat, please provide us your information
                    below;{" "}
                  </p>
                  <div className="my-4 space-y-6">
                    {error && (
                      <div
                        className="py-1 px-4 text-xs text-red-800 rounded-lg bg-red-50 "
                        role="alert"
                      >
                        <span className="font-medium text-sm">Error</span>{" "}
                        {error}
                      </div>
                    )}
                    <input
                      type="name"
                      id="name"
                      className="border border-gray-350 text-gray-900 focus:outline-none text-sm rounded-lg block w-full px-2.5 py-3"
                      placeholder="Name"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      className="border border-gray-350 text-gray-900 focus:outline-none text-sm rounded-lg block w-full px-2.5 py-3"
                      placeholder="Your Email"
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>
                  {isLoading ? (
                    <button
                      type="button"
                      disabled
                      className="w-full py-3 bg-blue-110 rounded-[10px] font-semibold text-white mb-6"
                    >
                      Starting chat....
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-110 rounded-[10px] font-semibold text-white mb-6"
                    >
                      Start chat
                    </button>
                  )}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
