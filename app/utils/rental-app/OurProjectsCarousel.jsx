import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { appIndustriesData } from "@/data/appIndustries";
import Link from "next/link";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

export default function OurProjectsCarousel({ industry }) {
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

  function filterAppIndustriesData(currentIndustry) {
    return appIndustriesData.filter(
      (industry) => industry.id !== currentIndustry
    );
  }

  const filteredData = filterAppIndustriesData(industry?.id);

  return (
    <section className="embla3 md:flex md:items-center w-full gap-1 sm:gap-4">
      <div className="hidden md:flex">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="embla__viewport3" ref={emblaRef}>
        <div className="embla__container3">
          {filteredData.map((x, index) => (
            <div key={index} className="embla__slide3 ">
              <Link href={`/${x.id}`}>
                <div className="h-full cursor-pointer hover:scale-105 hover:shadow-lg hover:rounded-2xl duration-200">
                  <Image
                    priority={false}
                    loading="lazy"
                    src={x.img}
                    alt={x.img}
                  />
                  <div>
                    <p className="text-blue-350 text-sm font-semibold px-4 py-2 underline">
                      {x.title} {x.extension}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mt-2 md:hidden">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
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
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className="hidden md:flex">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
}
