"use client";
import React from "react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/utils/EmblaCarouselArrowButtons.js";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { CaseStudy, DetailedCaseStudy } from "@/app/data/caseStudy";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "@/app/utils/EmblaCarouselDotButton";
import dynamic from "next/dynamic";
// import ProjectModal from "@/app/utils/OurWork/ProjectModel";
const ProjectModal = dynamic(() => import("@/app/utils/OurWork/ProjectModel"), {
  ssr: false,
});

export default function WorkCara() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    DetailedCaseStudy[0]
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [emblaCarouselAutoplay({ delay: 5000, stopOnMouseEnter: true })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
      <section className="embla12 relative max-w-screen-md lg:max-w-2xl xl:max-w-[930px] w-full md:flex md:items-center gap-1">
        <div className="hidden md:flex">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
        </div>
        <div className="embla__viewport12" ref={emblaRef}>
          <div className="embla__container12">
            {DetailedCaseStudy.map((x, index) => (
              <div key={index} className="embla__slide12 ">
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
                      className="object-contain rounded-2xl w-full shadow-md"
                    />
                  </div>

                  <div className="flex justify-between items-center py-2.5 space-y-1 rounded-b-2xl  bg-slate-100 px-2">
                    <div className="space-y-1">
                      <h1 className="font-semibold text-sm truncate text-wrap">
                        {x.title}
                      </h1>
                      <div className="text-gray-150 text-sm flex items-start justify-between">
                        <p className="">Mobile App Case Study</p>
                      </div>
                    </div>
                    <button className="bg-gray-200 text-sm px-3 py-1.5 text-black font-semibold border rounded-lg whitespace-nowrap shadow">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 mt-2 md:hidden">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <div className="embla__dots">
            {scrollSnaps.slice(0, -5).map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
        <div className="hidden md:flex">
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
