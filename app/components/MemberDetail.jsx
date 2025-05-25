import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
export default function MemberDetail({ isOpen, closeModal, member }) {
  if (!isOpen) return null;
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
          <div className="fixed inset-0 bg-black/30" />
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
              <Dialog.Panel className="w-full max-w-[541px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-semibold">Our Team</h1>
                  <CgClose
                    className="h-6 w-6 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 my-4">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={member.imageSrc}
                      alt={`${member.name}`}
                      className="lg:w-16 lg:h-16 w-11 h-11 rounded-full"
                      width={1000}
                      height={1000}
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-gray-140 lg:text-sm text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="lg:text-base text-sm text-gray-450">
                    {member.bio}
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
