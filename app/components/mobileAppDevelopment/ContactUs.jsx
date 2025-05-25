"use client";
import { Fragment, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="max-w-screen-lg mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-[32px] font-semibold">Contact us</h1>
        <p className="text-gray-750 font-medium max-w-lg">
          Ready to discuss your app idea with us? Fill in the details, and we
          will get right back to you. We are waiting to develop your app
        </p>
      </div>
      <div>
        {isError && (
          <div
            className="py-1 px-4 text-xs text-red-800 rounded-lg bg-red-50 "
            role="alert"
          >
            <span className="font-medium text-sm">Error</span> {isError}
          </div>
        )}
        {isMessage && (
          <div
            className="py-1 px-4 text-xs text-green-800 rounded-lg bg-green-50 "
            role="alert"
          >
            <span className="font-medium text-sm">Success</span> {isMessage}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name <span className="text-red-500 font-medium">*</span>
              </label>
              <input
                type="name"
                id="name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                name="name"
                min={3}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email <span className="text-red-500 font-medium">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone <span className="text-gray-350">(optional)</span>
              </label>
              <input
                min={11}
                type="tel"
                id="phone"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              rows={4}
              type="message"
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
              name="message"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
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
      </div>
    </div>
  );
}
