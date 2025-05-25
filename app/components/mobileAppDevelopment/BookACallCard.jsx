import Image from "next/image";
import chatIcon from "@/app/assets/chatIcon.svg";
import ContactUsBtn from "./ContactUsBtn";

export default function BookACallCard() {
  return (
    <div className="max-w-3xl mx-auto relative">
      <div className="bg-[#496f5d] bg-opacity-85 rounded-2xl p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-white bg-opacity-10">
          <div className="flex items-center justify-center w-full h-full">
            <Image src={chatIcon} width={24} height={24} alt="chat" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-medium text-white z-50">
            Connect With Mobile App Expert
          </h2>
        </div>
        <div>
          <ContactUsBtn />
        </div>
      </div>
      <div className="absolute -top-4 -right-6">
        <svg
          width="261"
          height="253"
          viewBox="0 0 261 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85.6401 152.561L43.3201 225.939L88.4103 252L130.73 178.621L173.05 252L218.141 225.939L175.821 152.561H260.461V100.439H175.821L218.141 27.0606L173.05 1L130.73 74.3788L88.4102 1L43.32 27.0606L85.6401 100.439H1V152.561H85.6401Z"
            strokeOpacity="0.56"
            strokeLinecap="square"
            className="stroke-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}
