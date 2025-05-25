import { ConsultationData } from "@/data/consultation";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import "../consultation.css";

export default function ConsultationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla1 relative gap-1 sm:gap-4 md:flex md:items-center w-full">
      <div className="hidden md:flex">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1 ">
          {ConsultationData.map((x, index) => (
            <div key={index} className="embla__slide1">
              <div className="h-full">
                <div className="rounded-2xl overflow-hidden">
                  {/* <video width={'100%'} height={240} autoPlay playsInline loop muted preload="none">
                  <source src={x.link} type="video/mp4" />
                  Duseca Into
                </video> */}
                  <iframe
                    className="h-64 xxs:h-72 sm:h-96 lg:h-72"
                    id={index + 1}
                    src={x?.link}
                    frameBorder="0"
                    width={"100%"}
                    height={"100%"}
                    title={x?.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                  {/* <Image  priority={false} loading="lazy"  
                  src={x.image}
                  alt='consultation'
                  width={413}
                  height={230}
                   priority={false} loading="lazy" 
                /> */}
                </div>
                <div className="p-2.5 space-y-0.5">
                  <h1 className="font-semibold text-blue-350 text-sm truncate">
                    {x?.title}
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
