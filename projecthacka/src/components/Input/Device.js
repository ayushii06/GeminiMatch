import React, { useState } from 'react'
import LaptopInput from '../Input/LaptopInput'
import CameraInput from './CameraInput'
import MobileInput from './MobileInput'
import SpeakerInput from './SpeakerInput'



function Device(props) {
  let object = props;
  let device=object.category
  
  return (
    <>
    
       {device==='Laptop' ? (
        <LaptopInput/>
      ) : (device==='Speaker' ? (
        <SpeakerInput/>):(
          device==='Camera'?(
            <CameraInput/>):(
              <MobileInput/>
            )
          )
        
      )}
    
    </>
  )
}

export default Device