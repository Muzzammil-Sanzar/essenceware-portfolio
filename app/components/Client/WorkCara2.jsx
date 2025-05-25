"use client";
import React from "react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/utils/GalleryArrow";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { DetailedCaseStudy } from "@/app/data/caseStudy";

import emblaCarouselAutoplay from "embla-carousel-autoplay";
// import ProjectModal from "@/app/utils/OurWork/ProjectModel";
import dynamic from "next/dynamic";
const ProjectModal = dynamic(() => import("@/app/utils/OurWork/ProjectModel"), {
  ssr: false,
});

export default function WorkCara2() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    DetailedCaseStudy[0]
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [emblaCarouselAutoplay({ delay: 5000, stopOnMouseEnter: true })]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );
  return (
    <>
      <section className="relative emblac-new-cara max-w-screen-2xl lg:max-w-2xl  xl:max-w-[930px] w-full md:flex md:items-center gap-1">
        <div className="flex items-center emblac-new-cara  max-w-screen-2xl lg:max-w-2xl gap-1 xl:max-w-[930px] w-full">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <div className="embla__viewport12" ref={emblaRef}>
            <div className="embla__container12">
              {DetailedCaseStudy?.map((x, index) => (
                <div key={index} className="embla__slide12 py-4">
                  <div
                    id="portfolioCarousel"
                    className="cursor-pointer portfolioCarousel rounded-2xl  bg-slate-100"
                    onClick={(e) => {
                      setIsOpen(true);
                      setSelectedCaseStudy(x);
                      setIndex(index);
                    }}
                  >
                    <div className="relative">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={x?.image}
                        alt="UBU"
                        width={450}
                        height={316}
                        className="object-contain w-full rounded-t-2xl"
                      />
                    </div>

                    <div className="flex justify-between items-center py-2.5 space-y-1 rounded-b-2xl  bg-slate-100 px-2">
                      <div className="space-y-1">
                        <h1 className="font-semibold text-sm truncate text-wrap line-clamp-1">
                          {x.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </section>
      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Casestudy={DetailedCaseStudy}
        index={index || 0}
        setIndex={setIndex}
      />
    </>
  );
}
