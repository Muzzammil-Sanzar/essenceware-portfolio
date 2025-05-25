"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const classes =
  "rounded py-6 flex justify-center items-center bg-[#28282B]/20 text-white";
export const PrevButton = (props) => {
  const { children, ...restProps } = props;
  return (
    <>
      <button
        // className="rounded py-5 bg-blue-150 text-white"
        className={classes}
        type="button"
        aria-label="prev"
        {...restProps}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4991 8.74994L15.4991 10.2499L6.49914 10.2499L10.6241 14.3749L9.55914 15.4399L3.61914 9.49994L9.55914 3.55994L10.6241 4.62494L6.49914 8.74994L15.4991 8.74994Z"
            fill="black"
          />
        </svg>
        {children}
      </button>
    </>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <>
      <button
        className={classes}
        // className="rounded py-5 flex justify-center items-center bg-blue-150 text-white"
        type="button"
        aria-label="prev"
        {...restProps}
      >
        <svg
          className="w-5 h-5 rotate-180"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4991 8.74994L15.4991 10.2499L6.49914 10.2499L10.6241 14.3749L9.55914 15.4399L3.61914 9.49994L9.55914 3.55994L10.6241 4.62494L6.49914 8.74994L15.4991 8.74994Z"
            fill="black"
          />
        </svg>
        {children}
      </button>
    </>
  );
};
