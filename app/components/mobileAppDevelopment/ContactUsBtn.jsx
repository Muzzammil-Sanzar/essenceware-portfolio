"use client";
import chatIcon from '@/app/assets/chatIcon.svg'
import Image from 'next/image';

export default function ContactUsBtn() {
  const handleChatMe = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <>
      <button
        id="portfolioButton"
        className="flex items-center px-4 py-2.5 bg-blue-150 rounded text-white gap-2.5"
        onClick={handleChatMe}
      >
        <Image
          priority={false}
          loading="lazy"
          width={24}
          height={24}
          src={chatIcon}
          alt="book"
        />
        <p>Talk to an Expert</p>
      </button>
    </>
  )
}
