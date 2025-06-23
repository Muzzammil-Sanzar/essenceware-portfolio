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
          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-5">
            {DetailedCaseStudy.map((x, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={(e) => {
                  setIsModalOpen(true);
                  setIndex(index);
                }}
              >
                <div className="rounded-2xl  bg-white shadow border border-slate-100 p-2 hover:shadow-xl hover:scale-100 duration-200 ease-in-out">
                  <div className="relative">
                    <Image
                      priority={false}
                      loading="lazy"
                      src={x?.image}
                      alt="UBU"
                      width={285}
                      height={186}
                      className="object-contain w-full h-full rounded-2xl shadow-md"
                    />
                  </div>

                  <div className="flex justify-between items-center py-2 space-y-1 rounded-b-2xl px-2">
                    <div className="space-y-1">
                      <div>
                        <p className="text-gray-600 text-sm">{x.company}</p>
                      </div>
                      <h1 className="font-semibold text-sm truncate text-wrap pb-5">
                        {x.title}
                      </h1>
                      <div className="text-gray-150 text-sm ">
                        <p className="">
                          Course duration:{" "}
                          <span className="font-semibold">{x.duration}</span>{" "}
                        </p>
                        <p className="">
                          Course difficulty:{" "}
                          <span className="font-semibold">{x.dificulty}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
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
