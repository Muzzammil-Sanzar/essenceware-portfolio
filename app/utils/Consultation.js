"use server";
import "./consultation.css";
import Image from "next/image";
import google from "@/app/assets/google1.svg";
import linkedin from "@/app/assets/linkedin.svg";
import fiverr from "@/app/assets/fiverr2.svg";
import people from "@/app/assets/people.svg";
import Link from "next/link";
import dynamic from "next/dynamic";

import ScheduleBtn from "@/app/components/Client/ScheduleBtn";
const ConsultationCara = dynamic(() => import("./ConsultationCara"), {
  ssr: false,
});
export default async function Consultation({ appName, showIcons }) {
  return (
    <div className="">
      <div className="space-y-5">
        <div className="font-semibold text-blue-140 space-y-2 sm:space-y-4">
          <div className="space-y-1">
            {showIcons && (
              <h2 className="text-base sm:text-lg mb-7 lg:text-2xl font-sans">
                What our students say’s
              </h2>
            )}
            {showIcons && (
              <div className="flex pb-7  justify-between items-end flex-wrap md:flex-nowrap gap-y-4">
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
                        <p className="text-[13px] underline text-gray-450">
                          53+
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
            <h1 className="text-[22px] xxs:text-[24px] sm:text-3xl mb-10 lg:text-[32px]">
              Watch Our
              <span className="text-blue-150"> App Consultations</span>
            </h1>
          </div>
          {/* <div
            className={`text-base font-medium text-gray-450 max-w-[1138px] hidden sm:block`}
          >
            <p>
              Join a consultation session with our CEO, Wajahat Malek, to learn
              all about {appName ? appName + " mobile app" : "mobile app"}{" "}
              development.
            
            </p>
          </div> */}

          {/* <div
            className={`text-base font-medium text-gray-450 max-w-[1138px] sm:hidden`}
          >
            <p>
              Join a consultation session with our CEO, Wajahat Malek, to learn
              all about {appName ? appName + " mobile app" : "mobile app"}{" "}
              development.
            </p>
          </div> */}
        </div>
        {/* <div className="text-sm sm:text-base">
          <ScheduleBtn />
        </div> */}

        <ConsultationCara />
      </div>
    </div>
  );
}
