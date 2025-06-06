import React from 'react'
import bg from '../../../public/bg-demo.png'
import Image from 'next/image'
import demo from '../../../public/demo.svg'

function Demo() {
  return (
    <div
   
    >
     <div className=" text-center font-semibold text-4xl py-14">Product Searching Made EASY!</div>
     <div className="text-center mx-auto w-[80%]">

     <Image src={demo} alt='demo' width={500} height={500}/>
     </div>
    </div>
  )
}

export default Demo
