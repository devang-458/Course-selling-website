import React from 'react'

export default function Hero() {
  return (
    <div className='flex md:h-screen justify-center h-96 ' >
        <div className='text-8xl flex flex-col md:text-4xl text-center justify-center shodow-2xl' >
            <div className='flex p-1 text-blue-700 justify-center md:text-6xl text-4xl h-max font-bold'>
            "First Step"
            </div>
            <div className='flex justify-center md:text-6xl text-4xl h-max font-bold pb-4'>
            Take Your Step Now 
            </div>
            <div className='p-1 text-gray-500 text-sm md:text-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl md:pl-8 md:pr-8 pl-8 pr-8'>
            Take the next step toward your personal and professional goals with "First Step".
            </div>
            <div className='py-6 md:py-8 flex flex-col md:flex-row justify-between pl-32 pr-32'>
            <button className='border shadow-lg text-[10px] md:text-sm px-4 md:px-10 rounded-lg bg-blue-600 mt-2 hover:bg-blue-800 text-white font-bold py-4'>Get Started</button>
            <button className='border shadow-lg text-[10px] md:text-sm px-4 md:px-10 rounded-lg bg-blue-600 mt-2 hover:bg-blue-800 text-white font-bold py-4'>Learn More</button>
            </div>
           
        </div>
    </div>
  )
}
