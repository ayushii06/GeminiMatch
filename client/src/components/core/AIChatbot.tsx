import Image from 'next/image'
import React from 'react'
import chatbot from '../../../public/chatbot.svg'

function AIChatbot() {
  return (
    <div className='rounded-full fixed bottom-5 right-5 bg-blue-600 p-2 w-15 h-15 cursor-pointer'>
        <Image alt='chatbot' src={chatbot}/>
    </div>
  )
}

export default AIChatbot