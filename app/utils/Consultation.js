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
            <h1 className="text-[22px] xxs:text-[24px] sm:text-3xl mb-10 lg:text-[32px]">
              What our
              <span className="text-blue-150"> students say’s</span>
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
