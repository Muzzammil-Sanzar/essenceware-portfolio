import Image from "next/image";
import Link from "next/link";

export default function CaseStrudies({ link }) {
  return (
    <div className="space-y-10 max-w-screen-lg mx-auto">
      <div>
        <h1 className="text-[32px] font-semibold">Case Studies</h1>
        <p className="font-medium text-[#928F8F]">
          Explore some of the transformative journeys of Duseca's global
          clients.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
        <Link href={link ? `${link}/E-commerce` : `/Mobile-App-Development/E-commerce`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722328501/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/Romolo_v0ps4r.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                Romolo: Enhance Ecommerce Efficiency, Decrease Costs by 50%
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
        <Link href={link ? `${link}/Social-Media` : `/Mobile-App-Development/Social-Media`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722328500/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/Partnr_Social_dkrv3c.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                Partnr Social: Transform how you connect and interact online
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
        <Link href={link ? `${link}/AI-Apps` : `/Mobile-App-Development/AI-Apps`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722328501/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/Super_GPT_qjileg.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                Super GPT: Enhance Productivity with AI, Decrease Costs by 39%
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
        <Link href={link ? `${link}/Fintech` : `/Mobile-App-Development/Fintech`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722328502/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/UBU_xcxwc8.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                UBU: We helped UBU automate operations, Reducing costs by 46%.
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
        <Link href={link ? `${link}/IOT-Apps` : `/Mobile-App-Development/IOT-Apps`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722358736/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/Frame_1686552435_upcwp7.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                KNAAP: Unlock the potential of connected living with our IoT
                solutions
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
        <Link href={link ? `${link}/Delivery-Apps` : `/Mobile-App-Development/Delivery-Apps`}>
          <div className="space-y-4 cursor-pointer hover:drop-shadow-xl duration-200 hover:p-[2px] hover:rounded-2xl ease-linear">
            <Image
              src={
                "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722328499/Duseca%20Landing%20Page-1/Case%20Study%20Thumbnails/Khedma_asuzqx.png"
              }
              width={665}
              height={380}
              alt="case study"
            />
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                Khedma: Quick, reliable, and stress-free delivery service.
              </h1>
              {/* <p className="text-gray-750">helped Sapling rapidly expanded their team, improve integrations and
              support some of the world's fastest growing companies.</p> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
