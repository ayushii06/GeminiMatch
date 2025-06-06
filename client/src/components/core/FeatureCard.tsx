"use client"
import React from 'react'
import { PinContainer } from '../ui/3d-pin'
import Image from 'next/image'
import featured from '../../../public/featured.svg'

function FeatureCard() {
  return (
    <div className='flex justify-center gap-16 items-center px-16'>
        <div className="w-[70%]">
            <div className="font-semibold text-2xl pb-4">Find any tech within minutes 
from just a prompt</div>
<div className="font-normal tracking-wider">Skip the clutter. Our curated AI Agent accelerates your search with razor-sharp tech suggestions, tailored to your needs and powered by smart intent.</div>
        </div>
         <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/bot.techdhundo.in"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[20rem] ">
          {/* <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Chatbot
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Search any project with our chatbot.
            </span>
          </div> */}
          <Image src={featured} alt='featured-card'/>
        </div>
      </PinContainer>
    </div>
    </div>
  )
}

export default FeatureCard