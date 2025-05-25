"use client";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import { useCallback } from "react";

export default function SolutionCarousel({ industryImages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [emblaCarouselAutoplay({ delay: 4000, stopOnMouseEnter: true })]
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
      <section className="emblac">
        <div className="flex items-center justify-center md:gap-2">
          <div>
            <PrevButton
              onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="embla__viewportc" ref={emblaRef}>
            <div className="embla__containerc ">
              {industryImages &&
                industryImages.map((x, index) => (
                  <div key={index} className="embla__slidec">
                    <div className="h-full flex justify-center">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={x}
                        alt="consultation"
                        // static width height change later
                        height={400}
                        width={200}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <NextButton
              onClick={() => onButtonAutoplayClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
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
      </section>
    </>
  );
}
