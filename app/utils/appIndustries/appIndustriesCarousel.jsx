"use client";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./appIndustriesCarousel.css";
import { appIndustriesData } from "@/app/data/appIndustries";
import Link from "next/link";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useCallback, useState } from "react";

export default function AppIndustriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      emblaCarouselAutoplay({
        delay: 5000,
        stopOnMouseEnter: true,
        stopOnInteraction: true,
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
    <section className="embla5 relative w-full md:flex md:items-center justify-center gap-1 md:gap-2">
      <div className="hidden md:flex">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
      </div>
      <div className="embla__viewport5" ref={emblaRef}>
        <div className="embla__container5 lg:p-4">
          {appIndustriesData.map((appIndustry, index) => (
            <div key={index} className="embla__slide5">
              <Link href={`/${appIndustry.id}`} prefetch>
                <div className="h-full relative cursor-pointer hover:lg:scale-105 hover:shadow-lg hover:rounded-2xl duration-200 bg-slate-100 rounded-2xl ">
                  <Image
                    priority={false}
                    loading="lazy"
                    src={appIndustry.img}
                    alt={appIndustry.img}
                    height={220}
                    width={416}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />

                  <div className="flex items-center justify-between text-blue-350 rounded-b-2xl  bg-slate-100 text-sm px-4 py-3">
                    <p className=" font-semibold ">
                      {appIndustry.title} {appIndustry.extension}
                    </p>
                    <button className="bg-gray-200 text-sm px-3 py-1.5 text-black font-semibold whitespace-nowrap shadow rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mt-2 md:hidden ">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <div className="embla__dots">
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
  );
}
