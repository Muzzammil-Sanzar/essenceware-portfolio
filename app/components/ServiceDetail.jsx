import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import { CiCircleCheck } from "react-icons/ci";

export default function ServiceDetail({ isOpen, setIsOpen, service }) {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

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
              className="flex justify-end w-full pr-4 absolute -top-4 right-0 "
              onClick={closeModal}
            ></button>
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
                <Dialog.Panel className="max-w-md w-full transform overflow-hidden rounded-2xl bg-white p-8 overflow-y-auto custom-scrollbar text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between w-full gap-2">
                    {/* <Image  priority={false} loading="lazy"   src={logo} alt="logo" /> */}
                    <h1 className="font-semibold lg:text-xl leading-8 text-xl ">
                      The Services We Provide
                    </h1>
                    <MdOutlineClose
                      onClick={closeModal}
                      className="h-6 w-7 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className=" my-5">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={service.image}
                        width={45}
                        height={45}
                        alt="service"
                      />
                    </div>
                    <h1 className="text-base md:text-xl font-semibold">
                      {service.title}
                    </h1>
                    <div className=" text-xs md:text-base text-black list-none space-y-1.5">
                      {service.description.map((des, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <CiCircleCheck className="text-blue-150" />
                          <li className="">{des}</li>
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
