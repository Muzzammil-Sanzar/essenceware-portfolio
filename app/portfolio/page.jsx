"use client";
import Header from "@/app/components/portfolio/Header";
import Image from "next/image";
import { useState } from "react";
import { DetailedCaseStudy } from "@/app/data/caseStudy";
import RequestPricingModal from "@/app/utils/requestPricing/RequestPricingModal";
import dynamic from "next/dynamic";
// import ProjectModal from "@/app/utils/OurWork/ProjectModel";
const ProjectModal = dynamic(() => import("@/app/utils/OurWork/ProjectModel"), {
  ssr: false,
});
export default function Home() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  return (
    <div>
      <Header setIsPricingOpen={setIsPricingOpen} />
      <div className="max-w-screen-1xl mx-auto w-full ">
        <div className="my-16">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 rounded-lg bg-gray-350/10 p-4">
            {DetailedCaseStudy.map((x, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={(e) => {
                  setIsModalOpen(true);
                  setIndex(index);
                }}
              >
                <div className="bg-white p-2.5 rounded-md hover:shadow-xl hover:scale-100 duration-200 ease-in-out">
                  <figure className="space-y-2">
                    <div className="">
                      <figcaption className="text-sm text-gray-450 font-bold">
                        {x.title}
                      </figcaption>
                    </div>
                    <div>
                      <Image
                        priority={false}
                        loading="lazy"
                        key={index}
                        src={x?.image}
                        alt={x.title}
                        width={436}
                        height={310}
                      />

                      {/* <Image  priority={false} loading="lazy"   className="object-contain w-full" src={LadiesCircleDetailed} quality={100} /> */}
                    </div>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        Casestudy={DetailedCaseStudy}
        index={index || 0}
        setIndex={setIndex}
      />
      <RequestPricingModal
        isOpen={isPricingOpen}
        setIsOpen={setIsPricingOpen}
      />
    </div>
  );
}
