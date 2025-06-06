import Image from 'next/image'
import React from 'react'
import { Search } from 'lucide-react'
import { SparklesCore } from '../ui/sparkles'

function HeroSection() {
  return (
    <>
       <div className="pt-8 h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="md:text-7xl text-3xl lg:text-7xl w-[60%] font-normal text-center text-white relative z-20">
         Find Your Next Tech In <span className="bg-gradient-to-r from-cyan-600 via-purple-700 to-pink-700 bg-clip-text text-transparent">MINUTES</span>
      </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
   
    

    <div className="text-center w-[62%] mx-auto font-light absolute pt-20 tracking-wider" >Skip the clutter. Our curated AI Agent accelerates your search with razor-sharp tech suggestions, tailored to your needs and powered by smart intent.</div>
    <div className="w-[50%] ">
  <div className="relative flex items-center gap-4 border border-gray-500 px-4 rounded-4xl">
    <Search/>
    <input
      className="w-full py-4 border-none outline-none"
      placeholder="Search Laptops..." 
    />
    <button
      className="text-white font-semibold cursor-pointer"
      type="button"
    >
      Search
    </button> 
  </div>
</div>
    </div>
     

    </>
  )
}

export default HeroSection