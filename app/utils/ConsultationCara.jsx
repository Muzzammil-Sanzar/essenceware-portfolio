"use client";
import "./consultation.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { ConsultationData } from "@/app/data/consultation";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import ConsultationVideo from "@/app/components/video/ConsultationVideo";

export default function ConsultationCara() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      emblaCarouselAutoplay({
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: true,
        stopOnFocusIn: true,
      }),
    ]
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
    <div>
      <section className="embla1 relative gap-1 sm:gap-4 md:flex md:items-center w-full">
        <div className="hidden md:flex">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
        </div>
        <div className="embla__viewport1" ref={emblaRef}>
          <div className="embla__container1 ">
            {ConsultationData.map((x, index) => (
              <div key={index} className="embla__slide1">
                <div className="h-full">
                  <div className="flex justify-center h-52 custom-height sm:h-60 md:h-48 lg:h-64 object-contain rounded-2xl overflow-hidden relative">
                    <ConsultationVideo data={x} />

                    <div className="absolute  top-0 left-0 w-full h-[36%]" />
                    <div className="absolute -top-16 left-0 w-[38%]  h-full" />
                    <div className="absolute -top-16 right-0 w-[38%]  h-full" />
                  </div>
                  <div className="p-1 py-0 mt-2 space-y-0.5">
                    <h1 className="font-semibold text-blue-350 text-sm truncate">
                      {x?.title?.split("|")?.[0]}
                    </h1>
                    <div className="flex items-center gap-2 text-sm">
                      <p className="font-medium">Target Market:</p>
                      <div className="flex gap-1 items-center">
                        <img
                          className=" w-5 h-5"
                          alt="contry flag"
                          src={x?.countryFlag}
                        />
                        <p className="text-">{x?.targetMarket}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center  justify-between gap-3 mt-4 md:hidden">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <div className="embla__dots ">
            {scrollSnaps.map((_, index) => (
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
    </div>
  );
}
