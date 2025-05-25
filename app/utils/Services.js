"use server";
// import PricingBtn from "@/components/Client/PricingBtn";
// import ServiceCara from "@/components/Client/ServiceCara";
import dynamic from "next/dynamic";
const PricingBtn = dynamic(() => import("@/app/components/Client/PricingBtn"), {
  ssr: false,
});
const ServiceCara = dynamic(
  () => import("@/app/components/Client/ServiceCara"),
  {
    ssr: false,
  }
);
export default async function Services({ btnTitle }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="space-y-3 sm:space-y-4 w-full col-span-12 lg:col-span-3">
          <h1 className="text-3xl 1xl:text-4xl font-semibold">
            Services We Provide
          </h1>
          <div className="text-base text-gray-450">
            <p className="max-w-xl lg:w-auto">
              Discover our range of services to match your project needs.
              Provide us with your details, and we'll customize a proposal just
              for you.
            </p>
          </div>
          <div className="text-sm sm:text-base">
            <PricingBtn btnTitle={btnTitle} />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9 px-4">
          <ServiceCara />
        </div>
      </div>
    </div>
  );
}
