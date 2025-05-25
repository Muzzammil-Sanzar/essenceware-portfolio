'use client'
import { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <>
      <button
        className="embla__button md:flex rounded-full bg-blue-150 text-white w-9 md:w-10 h-9 md:h-10 embla__button--prev"
        type="button"
        {...restProps}
      >
        <svg className='w-5 h-5' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4991 8.74994L15.4991 10.2499L6.49914 10.2499L10.6241 14.3749L9.55914 15.4399L3.61914 9.49994L9.55914 3.55994L10.6241 4.62494L6.49914 8.74994L15.4991 8.74994Z" fill="white" />
        </svg>

        {children}
      </button>
    </>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <>
      <button
        className="embla__button rounded-full bg-blue-150 text-white flex w-9 md:w-10 h-9 md:h-10 embla__button--next"
        type="button"
        {...restProps}
      >
        <svg className='w-3.5 h-3.5' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.500859 7.25006L0.500859 5.75006L9.50086 5.75006L5.37586 1.62506L6.44086 0.560058L12.3809 6.50006L6.44086 12.4401L5.37586 11.3751L9.50086 7.25006L0.500859 7.25006Z" fill="white" />
        </svg>

        {children}
      </button>
    </>
  )
}
