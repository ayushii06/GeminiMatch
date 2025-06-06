
import Footer from '@/components/common/Footer'
import AIChatbot from '@/components/core/AIChatbot'
import Demo from '@/components/core/Demo'
import FeatureCard from '@/components/core/FeatureCard'
import HeroSection from '@/components/core/HeroSection'
import Section2 from '@/components/core/Section2'
import React from 'react'

function page() {
  return (
    <div className='bg-black min-h-screen text-blue-50 '>

      <HeroSection/>
      <AIChatbot/>
      <Demo/>
      <FeatureCard/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default page