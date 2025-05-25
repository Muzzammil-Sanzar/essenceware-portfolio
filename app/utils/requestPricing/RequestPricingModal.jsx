import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import price from "../../assets/pricing.svg";
import Image from "next/image";
import { db } from "@/app/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ChatModal from "../chatUtils/ChatModal";

export default function RequestPricingModal({ isOpen, setIsOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [isError, setIsError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: "",
  });
  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setIsLoading(true);
    try {
      var templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        message: formData.message,
      };

      emailjs
        .send(
          "service_h136yqd",
          "template_xc7prxr",
          templateParams,
          "mPaRralX5XH6UKczo"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );

      const finalData = {
        createdAt: serverTimestamp(),
        ...formData,
      };
      const docRef = await addDoc(collection(db, "contactUs"), finalData);
      // Update the voucherId field with the ID of the saved document
      await updateDoc(doc(db, "contactUs", docRef.id), {
        contactId: docRef.id,
      });
      // setIsChatOpen(true);
      // setIsOpen(false);
      setIsMessage(
        "We have received your message and will be in contact shortly!"
      );
      handleChatMe();
    } catch (error) {
      setIsError(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
                <Dialog.Panel className="w-full relative max-w-4xl transform overflow-auto 1xl:overflow-hidden rounded-2xl bg-white px-6 text-left align-middle shadow-xl transition-all">
                  <div className="pb-24 sm:pb-10">
                    <div className="sticky outline-none top-4 left-0 right-0  flex justify-end">
                      <button
                        className="bg-black backdrop-blur-2xl p-2.5 rounded-full bg-opacity-5"
                        onClick={closeModal}
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 30 30"
                          fill="#000000"
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
                    </div>
                    <div className="max-w-[723px] mx-auto h-full text-blue-140">
                      <div className="py-3 space-y-4">
                        <h1 className="text-3xl font-bold uppercase text-blue-110 text-center">
                          REQUEST PRICING
                        </h1>
                        <p className="text-gray-150 font-semibold text-sm text-center">
                          We look forward to doing business with you. If you
                          require any further information, feel free to contact
                          us
                        </p>
                        {isError && (
                          <div
                            className="py-1 px-4 text-xs text-red-800 rounded-lg bg-red-50 "
                            role="alert"
                          >
                            <span className="font-medium text-sm">Error</span>{" "}
                            {isError}
                          </div>
                        )}
                        {isMessage && (
                          <div
                            className="py-1 px-4 text-xs text-green-800 rounded-lg bg-green-50 "
                            role="alert"
                          >
                            <span className="font-medium text-sm">Success</span>{" "}
                            {isMessage}
                          </div>
                        )}
                      </div>
                      <div className="w-full mt-4">
                        <div className=" ">
                          <form
                            id="requestPricingForm"
                            className="space-y-5"
                            onSubmit={handleSubmit}
                          >
                            <div className="grid lg:grid-cols-3 gap-4">
                              <div className="">
                                <label
                                  htmlFor="name"
                                  className="block mb-1 text-sm font-medium text-black"
                                >
                                  Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="name"
                                  id="name"
                                  className="bg-gray-850 border border-gray-120 focus:outline-none text-gray-900 text-base rounded-lg block w-full px-2.5 py-2"
                                  placeholder=""
                                  name="name"
                                  min={3}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="">
                                <label
                                  htmlFor="email"
                                  className="block mb-1 text-sm font-medium text-black"
                                >
                                  Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="bg-gray-850 border border-gray-120 text-gray-900 focus:outline-none text-base rounded-lg block w-full px-2.5 py-2"
                                  placeholder=""
                                  name="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="">
                                <label
                                  htmlFor="phone"
                                  className="block mb-1 text-sm font-medium text-black"
                                >
                                  Phone
                                  <span className="text-gray-130 font-normal ml-1 text-[10px]">
                                    (optional)
                                  </span>
                                </label>
                                <input
                                  min={11}
                                  type="tel"
                                  id="phone"
                                  className="bg-gray-850 border border-gray-120 text-gray-900 focus:outline-none text-base rounded-lg block w-full px-2.5 py-2"
                                  name="phone"
                                  onChange={handleChange}
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="mt-4">
                              <label
                                htmlFor="message"
                                className="block mb-1 text-sm font-medium text-black"
                              >
                                Message
                              </label>
                              <textarea
                                rows={4}
                                type="message"
                                id="message"
                                className="bg-gray-850 border border-gray-120 focus:outline-none text-gray-900 rounded-lg block w-full text-base p-2.5"
                                placeholder=""
                                name="message"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            {/* <div className="flex w-full sm:items-center gap-2 my-4">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                              className="max-w-4 mt-1 sm:mt-0 w-4 h-4 shrink-0 text-blue-600 bg-gray-100 border-gray-300 rounded-full overflow-hidden"
                            />
                            <label
                              htmlFor="default-checkbox"
                              className="text-[14px] text-black"
                            >
                              By checking this box I agree to be contacted by Duseca Software in accordance with the Privacy Policy
                            </label>
                          </div> */}
                            <div className="flex justify-center sm:justify-start">
                              {isLoading ? (
                                <button
                                  type="submit"
                                  className="py-2 bg-blue-110 rounded-lg text-white text-base font-semibold w-[155px]"
                                >
                                  Submitting...
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="py-2 bg-blue-110 rounded-lg text-white text-base font-semibold w-[155px]"
                                >
                                  Request pricing
                                </button>
                              )}
                            </div>
                          </form>
                          <div className="inline-flex items-center justify-center w-full pt-7">
                            <hr className="w-[900PX] h-[1PX] bg-gray-450 border-0 rounded " />
                            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 text-gray-650 font-medium text-base ">
                              OR
                            </div>
                          </div>
                          <div className="flex justify-between lg:flex-row flex-col py-6">
                            <div className="lg:text-left text-center">
                              <h1 className="text-xl md:text-3xl font-bold text-blue-110 lg:mx-0">
                                Discuss your idea <br /> with our{" "}
                                <span className="text-green-250">live</span>{" "}
                                Agent
                              </h1>
                              <p className="max-w-[430px] mx-auto lg:mx-0 leading-6 pb-3  text-gray-140 font-[450px]">
                                Whether you are a business owner or interested
                                in exploring,{" "}
                                <span className="text-blue-110">
                                  Duseca’s Agent
                                </span>{" "}
                                will help you understand how mobile apps can be
                                designed to meet your needs.
                              </p>
                              <div className="flex justify-center lg:justify-start">
                                {/* <Link href={'/chat'}> */}
                                <button
                                  onClick={(e) => {
                                    // setIsOpen(false);
                                    // if (window.innerWidth < 768) {
                                    // }
                                    handleChatMe();
                                    // setIsChatOpen(true);
                                  }}
                                  className="text-blue-150  flex items-center font-semibold gap-2 border justify-center text-center px-5 border-blue-150 py-2 rounded-lg"
                                >
                                  <div className="bg-green-150/90 rounded-full h-1.5 w-1.5"></div>
                                  Chat now
                                </button>
                                {/* </Link> */}
                              </div>
                            </div>
                            <div className="lg:block hidden">
                              <Image
                                priority={false}
                                loading="lazy"
                                src={price}
                                alt="price"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ChatModal isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
