"use client";
import ChatHeader from "@/app/utils/chatUtils/ChatHeader";

export default function chat() {
  return (
    <>
      <div className="max-w-screen-2xl h-screen  mx-auto">
        <ChatHeader />
        {/* <Chat /> */}
        <div className="max-h-[calc(100vh_-_7rem)]  h-full">
          <iframe
            className={`rounded-2xl bg-white  drop-shadow-lg border h-full`}
            width={"100%"}
            height={"100%"}
            src="https://tawk.to/chat/65cb0a910ff6374032cc7be4/1hmgi2j8g"
            strategy="afterInteractive"
            crossOrigin="*"
          />
        </div>
      </div>
    </>
  );
}
