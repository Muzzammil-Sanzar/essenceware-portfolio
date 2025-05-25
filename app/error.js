'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import errorImage from '@/app/assets/error.svg'

export default function error({ error, reset }) {
  return (
    <div className='max-w-screen-1xl mx-auto h-screen'>
      <div className='flex flex-col items-center justify-center w-full h-full space-y-5'>
        <div>
          <Image src={errorImage} alt='error message' />
        </div>
        <div className='text-center space-y-2'>
          <h2 className='text-5xl font-semibold text-gray-750'>Something went wrong!</h2>
          <p className='text-xl text-gray-600'>{error.message}</p>
        </div>
        <button
          className='px-5 py-2 rounded-full bg-blue-150 text-white'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
