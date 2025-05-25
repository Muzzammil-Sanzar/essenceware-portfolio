"use client";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { TeamCarousel } from "@/app/data/TeamMembers";
import Image from "next/image";
import MemberDetail from "@/app/components/MemberDetail";
import { useState } from "react";
import "./aboutCarousel.css";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";

export default function AboutUsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [emblaCarouselAutoplay({ delay: 4000, stopOnMouseEnter: true })]
  );
  const [seletedMember, setSelectedMember] = useState(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  // const applyBorder = index % 2 == 0 && index !== teamMembers - 1;
  const openDetailModal = (member) => {
    setIsDetailModalOpen(true);
    setSelectedMember(member);
  };
  const closeDetailModal = () => setIsDetailModalOpen(false);

  return (
    <>
      <section className="embla11  relative lg:max-w-lg xl:max-w-[930px] w-full md:flex md:items-center">
        {/* TEMP CHANGES OF ARROWS */}
        <div className="hidden md:flex ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="embla__viewport11" ref={emblaRef}>
          <div className="embla__container11 md:divide-x-2 lg:divide-x-0 xl:divide-x-2 md:divide-blue-150/10">
            {TeamCarousel.map((member, index) => (
              <div key={index} className="embla__slide11">
                <div className="h-full md:px-3">
                  <div
                    onClick={(e) => openDetailModal(member)}
                    className={`flex flex-col lg:px-8 `}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={member.imageSrc}
                        alt={member.name}
                        className="lg:w-16 lg:h-16 w-11 h-11 rounded-full"
                        width={64}
                        height={64}
                      />
                      <div>
                        <h1 className="lg:text-lg text-base text-gray-140 font-semibold whitespace-nowrap">
                          {member.name}
                        </h1>
                        <p className="text-gray-140 lg:text-base text-xs">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="text-base  text-gray-450 mt-6 line-clamp-2">
                        {member.bio}
                      </span>
                      <span className="absolute bottom-0 right-0 bg-white text-gray-450  text-sm cursor-pointer text-right">
                        ... <span className="underline">Read more</span>
                      </span>
                      <div className="flex justify-end"></div>
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
      <MemberDetail
        isOpen={isDetailModalOpen}
        closeModal={closeDetailModal}
        member={seletedMember}
      />
    </>
  );
}
