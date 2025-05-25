"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("+1");
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto lg:px-8 px-4">
        <div className="flex justify-center items-center flex-col ">
          <div className="mt-9 mb-5">
            <Image
              priority={true}
              src="https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp"
              alt="logo"
              width={186}
              height={63}
            />
          </div>
          <div className="text-center w-full flex flex-col gap-2 justify-center items-center">
            <h1 className="lg:text-4xl w-full text-slate-800  sm:w-[70%] lg:w-[50%] leading-relaxed lg:leading-[55px]  text-2xl font-bold mb-3">
              Thank you for helping us kickstart this project! Please provide
              your information below.
            </h1>
            <p className="text-gray-350 lg:text-xl">
              This will allow us to reach out to you for any critical
              participations.
            </p>
          </div>
          <form className="my-10 space-y-7 text-xl w-[95%] sm:w-[70%] lg:w-[50%]  text-start text-black">
            <div>
              <label>Name:</label>
              <input
                type="text"
                id="name"
                className="bg-gray-170 text-gray-900 rounded- text-sm focus:outline-none block w-full px-2.5 py-4 mt-2"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                id="email"
                className="bg-gray-170 text-gray-900 text-sm rounded-lg focus:outline-none block w-full px-2.5 py-4 mt-2"
              />
            </div>
            <div className="lg:block hidden">
              <label>Contact Number:</label>
              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  id="phone"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="bg-gray-170 text-gray-900 text-sm rounded-lg focus:outline-none block px-2.5 py-5 mt-2 w-full"
                />
              </div>
            </div>
            <div className="lg:hidden block">
              <label>Contact Number:</label>
              <input
                type="text"
                id="contact"
                className="bg-gray-170 text-gray-900 text-sm rounded-lg focus:outline-none block w-full px-2.5 py-4 mt-2"
              />
            </div>
            <div>
              <label>Project Name:</label>
              <input
                type="text"
                id="project"
                className="bg-gray-170 text-gray-900 text-sm rounded-lg focus:outline-none block w-full px-2.5 py-4 mt-2"
              />
            </div>
            <div>
              <label>Comments:</label>
              <textarea
                type="text"
                id="comment"
                rows={8}
                className="bg-gray-170 text-gray-900 text-sm rounded-lg focus:outline-none block w-full px-2.5 py-4 mt-2"
              />
            </div>

            <div>
              <button className="w-full bg-blue-150 text-white text-base py-3 rounded-md font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
