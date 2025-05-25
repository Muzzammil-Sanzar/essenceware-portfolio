import Image from "next/image";
import Link from "next/link";
import emailIcon from "@/app/assets/emailIcon.svg";
import chatIcon from "@/app/assets/chatIcon.svg";
import IndustryDetailPageContactusbtn from "./IndustryDetailPageContactusbtn";

export default function IndustryDetailPageNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-blue-150 text-white font-medium w-full ">
        <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="text-xs">
              <h1>We Make Awesome Apps</h1>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <Image src={emailIcon} alt="email" />
                <p>info@dusecasoftware.com</p>
              </div>
              {/* <div className="lg:flex items-center gap-1 hidden">
                <Image src={chatIcon} width={24} height={24} alt="chat" />
                <p>Live Chat</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-1xl mx-auto px-4 lg:px-8 1xl:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer">
              <Link href={'/custom-mobile-development'}>
                <Image src={'https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp'} width={186} height={63.29} alt="logo" />
              </Link>
            </div>
            <div>
              <IndustryDetailPageContactusbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
