import Image from "next/image";
import Link from "next/link";
import { SlSocialFacebook, SlSocialGoogle, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { TbBrandFiverr } from "react-icons/tb";
import { TfiInstagram } from "react-icons/tfi";

export default function IndustrialDetailPageFooter() {
  return (
    <div className="bg-white py-12 mt-16">
      <div className="max-w-screen-1xl mx-auto px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-8">
          <div>
            <Image src={'https://res.cloudinary.com/dprxdqfxc/image/upload/v1719470799/Duseca%20Logo/sdfg_skigtp.webp'} width={186} height={63.29} alt="logo" />
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={"https://www.linkedin.com/company/duseca-software/"} target="_blank" aria-label="LinkedIn" prefetch={false}>
                <SlSocialLinkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={"https://www.fiverr.com/agencies/duseca"}
                target="_blank" aria-label="Fiverr" prefetch={false}>
                <TbBrandFiverr className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={
                "https://www.google.com/search?q=duseca&oq=duseca&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORiABBiiBDIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEINDI0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
              }
                target="_blank" aria-label="Google" prefetch={false}>
                <SlSocialGoogle className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={"https://www.youtube.com/@dusecasoftware"} target="_blank" aria-label="YouTube" prefetch={false}>
                <SlSocialYoutube className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={"https://web.facebook.com/DusecaSoftware/"} target="_blank" aria-label="Facebook" prefetch={false}>
                <SlSocialFacebook className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-350 hover:scale-105 hover:border-blue-150 cursor-pointer text-gray-750 hover:text-blue-150" >
              <Link href={"https://www.instagram.com/dusecasoftware/"} target="_blank" aria-label="Instagram" prefetch={false}>
                <TfiInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
