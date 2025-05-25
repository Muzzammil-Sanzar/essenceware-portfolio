"use client";
import Image from "next/image";
import logo from "../../assets/logo1.png";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function ChatHeader({ closeModal }) {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-0 bg-white z-50 py-3 px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="w-full">
            <div className="flex items-end justify-between  gap-5">
              <div className="flex items-end gap-5">
                <Link href={"/"}>
                  <Image
                    priority={false}
                    loading="lazy"
                    src={logo}
                    alt="logo"
                    width={"auto"}
                    height={"auto"}
                    className="object-contain w-[153px]"
                    priority={false}
                    loading="lazy"
                  />
                </Link>
                <div className="">
                  {/* <div className="text-gray-350 mt-5">
                    <button className="flex items-center cursor-pointer gap-1 hover:text-blue-150 transition duration-300" onClick={closeModal}><IoArrowBack />Back</button>
                  </div> */}
                  {/* <div className="flex gap-4">
                  <div className="text-black/60 font-semibold flex items-center gap-2">
                    <FaStar className="text-blue-150" />
                    5.0
                    <p className="text-blue-550 font-normal text-sm underline">
                      (725)
                    </p>
                    <div className="bg-gray-650 w-[1px] h-6 md:block hidden"></div>
                    <span className="text-blue-150 rounded lg:text-sm md:block hidden text-xs font-semibold bg-blue-110/[17%] px-6 py-1">
                      Highly Responsive
                    </span>
                  </div>
                </div> */}
                </div>
              </div>
              <div className="text-green-150  font-semibold w-fit flex items-center bg-green-150 bg-opacity-15 px-2.5 rounded-full gap-1">
                <div className="bg-green-150/90 rounded-full h-[9px] w-[9px]"></div>
                Online
              </div>
            </div>

            <div>
              {/* <div className="text-gray-350">
                <Link href={'/'} className="flex items-center gap-1 hover:text-blue-150 transition duration-300"><GoHomeFill />Home</Link>
              </div> */}
            </div>
          </div>
          {/* <button
              className="text-blue-150 text-sm font-semibold md:flex hidden items-center gap-1 mt-2 bg-blue-150/[12%] px-3 py-2 rounded-lg"
              onClick={openChatModal}
            >
              <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.84962 19.3218C3.99883 19.4683 4.11317 19.6453 4.18448 19.84C4.25579 20.0347 4.28232 20.2424 4.26219 20.4484C4.16091 21.4013 3.96938 22.343 3.69006 23.2612C5.69537 22.807 6.92013 22.2809 7.47644 22.0053C7.79197 21.8489 8.15535 21.8119 8.49706 21.9012C9.47643 22.1577 10.4862 22.2863 11.5 22.2838C17.2442 22.2838 21.5625 18.3359 21.5625 13.8451C21.5625 9.35433 17.2442 5.40644 11.5 5.40644C5.75575 5.40644 1.4375 9.35574 1.4375 13.8451C1.4375 15.9098 2.32444 17.8253 3.84962 19.3218ZM3.14094 24.814C2.80033 24.8799 2.45864 24.9404 2.116 24.9954C1.8285 25.0404 1.61 24.7478 1.72356 24.4862C1.85086 24.1916 1.96784 23.8928 2.07431 23.5903L2.07862 23.5763C2.43512 22.5636 2.7255 21.3991 2.83188 20.3147C1.06806 18.5848 0 16.3204 0 13.8451C0 8.40779 5.14912 4 11.5 4C17.8509 4 23 8.40779 23 13.8451C23 19.2824 17.8509 23.6902 11.5 23.6902C10.3609 23.6927 9.22652 23.548 8.12619 23.2598C7.37869 23.6297 5.77012 24.3034 3.14094 24.814Z" fill="#1D7CCF" />
                <ellipse cx="23.2077" cy="7.08333" rx="7.79167" ry="7.08333" fill="#1D7CCF" />
                <path d="M21.5713 10V9.04785L24.1592 6.30859C24.2699 6.18815 24.361 6.08398 24.4326 5.99609C24.5075 5.90495 24.5824 5.79915 24.6572 5.67871C24.7354 5.55501 24.7939 5.42806 24.833 5.29785C24.8721 5.16439 24.8916 5.02767 24.8916 4.8877C24.8916 4.55892 24.7907 4.29036 24.5889 4.08203C24.3903 3.8737 24.1348 3.76953 23.8223 3.76953C23.4577 3.76953 23.1615 3.89974 22.9336 4.16016C22.709 4.42057 22.6016 4.764 22.6113 5.19043H21.4102C21.3874 4.71842 21.4769 4.28874 21.6787 3.90137C21.8805 3.514 22.1719 3.20964 22.5527 2.98828C22.9368 2.76367 23.373 2.65137 23.8613 2.65137C24.5124 2.65137 25.0544 2.84831 25.4873 3.24219C25.9235 3.63281 26.1416 4.16829 26.1416 4.84863C26.1416 5.09603 26.1139 5.32389 26.0586 5.53223C26.0065 5.74056 25.9235 5.93587 25.8096 6.11816C25.6956 6.2972 25.5964 6.4388 25.5117 6.54297C25.4303 6.64388 25.3132 6.77572 25.1602 6.93848L23.2803 8.93066H26.1904V10H21.5713Z" fill="white" />
              </svg>

              Chat with me!
            </button> */}

          {/* <div className="md:block hidden">
            <div className="flex justify-end" onClick={e => setIsPricingOpen(true)}>
              <button className="bg-blue-150 rounded-lg text-white py-1.5 xl:py-3 px-3 xl:px-6 lg:flex hidden gap-2 items-center font-semibold">

                Request pricing
              </button>
            </div>
            <p className="text-gray-750 font-medium pt-4">
              Average response time:{" "}
              <span className="text-blue-150 font-semibold">20 min</span>{" "}
            </p>
          </div> */}
        </div>
        {/* <div className="w-full border-b-[1px] border-blue-110/[44%]">
          <div className="overflow-x-auto custom-scroll">
            <div className="flex gap-8 items-center md:justify-center pb-2 md:mt-0 mt-6 text-xs lg:text-sm text-gray-350 font-medium w-full whitespace-nowrap">
              <div className="">
                <Link href={'/'} className="flex items-center gap-1 hover:text-blue-150 transition duration-300"><GoHomeFill />Home</Link>
              </div>
              <div className="">
                <Link href={'/#About'} className="hover:text-blue-150 transition duration-300">About Us</Link>
              </div>
              <div className="">
                <Link href={'/#Consultation'} className="hover:text-blue-150 transition duration-300">Consultations</Link>
              </div>
              <div className="">
                <Link href={'/#work'} className="hover:text-blue-150 transition duration-300">Projects</Link>
              </div>
              <div className="">
                <Link href={'/#Services'} className="hover:text-blue-150 transition duration-300">Services</Link>
              </div>
              <div className="">
                <Link href={'/#appIndustries'} className="hover:text-blue-150 transition duration-300">App Industries</Link>
              </div>
              <div className="">
                <Link href={'/#Reviews'} className="hover:text-blue-150 transition duration-300">Reviews</Link>
              </div>
            </div>
          </div>
        </div> */}
        <button
          className="flex justify-center items-center bg-blue-150/25 backdrop-blur-md p-0.5 rounded-full w-7 h-7 hover:scale-110 absolute outline-none top-4 right-5 "
          onClick={closeModal}
        >
          <svg
            className="w-2.5 h-2.5"
            viewBox="0 0 30 30"
            fill="#1D7CCF"
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
    </>
  );
}
