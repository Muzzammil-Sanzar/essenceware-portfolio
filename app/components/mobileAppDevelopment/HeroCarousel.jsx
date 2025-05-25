"use client";
import { DotButton, useDotButton } from "@/app/utils/EmblaCarouselDotButton";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import HeroSectionData from './HeroSectionData.json'
import './HeroCarousel.css'

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [emblaCarouselAutoplay({ delay: 3000, stopOnMouseEnter: true })]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  // const onButtonAutoplayClick = useCallback(
  //   (callback) => {
  //     const autoplay = emblaApi?.plugins()?.autoplay;
  //     if (!autoplay) return;

  //     const resetOrStop =
  //       autoplay.options.stopOnInteraction === false
  //         ? autoplay.reset
  //         : autoplay.stop;

  //     resetOrStop();
  //     callback();
  //   },
  //   [emblaApi]
  // );

  return (
    <>
      <section className="emblah">
        <div className="embla__viewporth" ref={emblaRef}>
          <div className="embla__containerh">
            {HeroSectionData && HeroSectionData.map((x, index) => (
              <div key={index} className="embla__slideh cursor-pointer flex items-center justify-center">
                <Image
                  priority={false}
                  loading="lazy"
                  src={x.image}
                  alt="app images"
                  height={100}
                  width={700}
                />
              </div>
            ))}
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
