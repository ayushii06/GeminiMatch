import Image from 'next/image'
import React from 'react'
import task from '../../../public/task.svg'

function Section2() {
  return (
    <>
<div className="text-center font-semibold text-5xl pb-5">
    AI AGENT THAT RECOMMENDS
</div>
<div className="w-[60%] my-6 tracking-wider mx-auto text-center font-normal">
    The Products Recommended AI Agent Chat bot is designed to automatically search tech products from various various platforms and provides top three products as per user requirement. It also provides pros and cons of different products and can generate summary of differences between the products.
</div>
<div className="mx-auto w-[80%] py-28">
    <Image src={task} alt='task-image'/>
</div>
    </>
  )
}

export default Section2