import { IoChevronBack } from "react-icons/io5";
import logo2 from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Header({ setIsPricingOpen }) {
  return (
    <div className="sticky top-0 bg-white z-50 py-4 px-3 1xl:px-0 border-b">
      <div className="max-w-screen-1xl  mx-auto w-full flex items-center justify-between ">
        <Link href={"/#OurWork"} prefetch={false}>
          <div className="flex items-center gap-1 cursor-pointer text-blue-150 text-base font-semibold border-b border-blue-150">
            <IoChevronBack />
            <p>Back</p>
          </div>
        </Link>
        <Link href={"/#OurWork"}>
          <div className="w-50">
            <Image priority={false} loading="lazy" src={logo2} alt="logo" />
          </div>
        </Link>
        <div>
          {/* <button
            onClick={(e) => setIsPricingOpen(true)}
            className="rounded-lg text-white bg-blue-150 py-2 xl:py-3 px-3 xl:px-6 gap-2 text-xs font-semibold"
          >
            Request pricing
          </button> */}
        </div>
      </div>
    </div>
  );
}
