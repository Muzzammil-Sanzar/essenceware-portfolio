"use client";
import "../../../utils/consultation.css";
import Image from "next/image";
import google from "../../../assets/google1.svg";
import linkedin from "../../../assets/linkedin.svg";
import fiverr from "../../../assets/fiverr2.svg";
import people from "../../../assets/people.svg";
import Link from "next/link";
import dynamic from "next/dynamic";

import ScheduleBtn from "../../../components/Client/ScheduleBtn";

const ConsultationCara = dynamic(
  () => import("../../../utils/ConsultationCara"),
  {
    ssr: false,
  }
);
export default function ConsultationTemp({ appName, showIcons, showBtn }) {
  return (
    <div className="">
      <div className="space-y-5">
        <div className="font-semibold text-blue-140 space-y-2 sm:space-y-4">
          <div className="space-y-1">
            {showIcons && (
              <h2 className="text-base sm:text-lg lg:text-2xl font-sans">
                Have an idea or a project?
              </h2>
            )}
            <h1 className="text-[27px] sm:text-3xl lg:text-[32px]">
              Get DUSECA's Free{" "}
              <span className="text-blue-150">
                {appName ? appName + " Apps" : "App"} Consultation
              </span>
            </h1>
          </div>
          <div
            className={`text-base font-medium text-gray-450 max-w-[1138px] hidden sm:block`}
          >
            <p>
              Join a consultation session with our CEO, Wajahat Malek, to learn
              all about {appName ? appName + " mobile app" : "mobile app"}{" "}
              development. Whether you are a business owner or interested in
              exploring, Wajahat will help you understand how{" "}
              {appName ? appName + " mobile app" : "mobile app"} can be designed
              to meet your needs. He'll share insights on making apps that are
              easy to use and effective. Don’t miss the chance to get expert
              advice and answers to your questions.
            </p>
          </div>

          <div
            className={`text-base font-medium text-gray-450 max-w-[1138px] sm:hidden`}
          >
            <p>
              Join a consultation session with our CEO, Wajahat Malek, to learn
              all about {appName ? appName + " mobile app" : "mobile app"}{" "}
              development. Whether you are a business owner or interested in
              exploring, Wajahat will help you understand how{" "}
              {appName ? appName + " mobile app" : "mobile app"} can be designed
              to meet your needs.
            </p>
          </div>
        </div>
        <div className="text-sm sm:text-base">
          {
            showBtn && <ScheduleBtn text={"Book a free consultation"} />
          }

        </div>
        {showIcons && (
          <div className="flex justify-between items-end flex-wrap md:flex-nowrap gap-y-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href={"https://www.linkedin.com/company/duseca-software/"}
                target="_blank"
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <div>
                    <Image
                      priority={false}
                      loading="lazy"
                      src={linkedin}
                      alt="linkedin"
                      className=" object-contain"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[15px] text-blue-150 font-semibold">
                      Linkedin
                    </h2>
                    <p className="text-[13px] underline text-gray-450">
                      6k+ followers
                    </p>
                  </div>
                </div>
              </Link>
              {/* fiverr section */}
              <Link
                href={"https://www.fiverr.com/agencies/duseca"}
                target="_blank"
              >
                <div className="flex flex-col items- gap-1">
                  <div>
                    {/* fiverr logo */}
                    <Image
                      priority={false}
                      loading="lazy"
                      src={fiverr}
                      alt="fiverr"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    <p className="text-[13px] underline text-gray-450">
                      883 Orders Completed
                    </p>
                  </div>
                </div>
              </Link>
              {/* google section */}
              <Link
                href={
                  "https://www.google.com/search?q=duseca&oq=duseca&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORiABBiiBDIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEINDI0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                }
                target="_blank"
              >
                <div className="flex items-center gap-1">
                  <div>
                    {/* google logo */}
                    <Image
                      priority={false}
                      loading="lazy"
                      src={google}
                      alt="google"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[15px] font-semibold text-[#FBBC05]">
                      Presence
                    </h2>
                    <p className="text-[13px] underline text-gray-450">
                      Since 2018
                    </p>
                  </div>
                </div>
              </Link>
              {/* employee section */}
              <Link
                href={
                  "https://www.linkedin.com/company/duseca-software/people/"
                }
                target="_blank"
              >
                <div className="flex items-center gap-1 ml-4 xxs:ml-2 sm:ml-0">
                  <div>
                    {/* employee logo */}
                    <Image
                      priority={false}
                      loading="lazy"
                      src={people}
                      alt="people"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-[15px] font-semibold text-blue-150">
                      Employees
                    </h2>
                    <p className="text-[13px] underline text-gray-450">53+</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        <ConsultationCara />
      </div>
    </div>
  );
}
