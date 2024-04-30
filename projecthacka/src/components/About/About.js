import React from 'react'
import './About.css'

function About() {
  return (
    <div>
        <p className='bold-center'>We're <span>LogicalVoids</span></p>
        <p className='head'>We are a dynamic trio of web development aficionados with a passion for crafting cutting-edge digital experiences. Our team combines expertise in front-end development, back-end logic, and user-centric design to deliver seamless and captivating web solutions. With a relentless pursuit of innovation and a commitment to excellence, we're poised to make a lasting impact at the hackathon and beyond.</p>
        <div className='bold-center'>About Gemini Match</div>
        <div>
            <div className='about-ul'>
            <div className='flex-out'>
                <p className='bold'>Purpose</p> <p className='left-width'>Simplify online gadget shopping.</p>
                </div>
                <div className='flex-out'>
                <p className='bold'>Inspiration</p> <p className='left-width'>Frustration with time-consuming online searches.</p> </div>
                <div className='flex-out'>   <p className='bold'>Functionality</p> <p className='left-width'>Personalized search for tech products within specified conditions</p> </div>
                <div className='flex-out'>  <p className='bold'>Unique Selling Point</p> <p className='left-width'>Tailored recommendations, saving time and effort.</p> </div>
                <div className='flex-out'> <p className='bold'>Benefits</p> <p className='left-width'>Efficient, hassle-free shopping experience.</p> </div>
                <div className='flex-out'> <p className='bold'>User Experience</p> <p className='left-width'>Intuitive interface, seamless navigation.</p> </div>
                <div className='flex-out'> <p className='bold'>Target Audience</p> <p className='left-width'>Anyone looking to buy gadgets online.</p> </div>
                <div className='flex-out'> <p className='bold'>Future Plans</p> <p className='left-width'>Expand to include more product categories and enhance user customization options.</p> </div>
            </div>
        </div>
        <div className='center'>For judges</div>
        <p className='disclaimer'>The output of searches sometimes might show error. This is because the output of GeminiAPI is not in perfect JSON format always. Please refresh the page in that case.</p>
    </div>
  )
}

export default About