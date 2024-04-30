import React, { useState } from 'react'
import './input.css'
import '../Home/Home.css'
import { Link } from 'react-router-dom'



const MyComponent = () => {
    const options = [
      { value: 'Select category', label: 'Select category' },
        { value: 'Laptop', label: 'Laptop' },
        { value: 'Mobile', label: 'Mobile' },
        { value: 'Camera', label: 'Camera' },
        { value: 'Speaker', label: 'Speaker' },
      
      ]
      
      const [val,setVal]=useState('');
      
      function handleChange(event){
          setVal(event.target.value)
       
      }
    return (
      <>
      <div className='bg-aliceblue'>
      <div className="heading-info">
        <p className=""> Tired of wading through endless tech specs and reviews? Let us help you find the perfect gadgets that fit your needs and budget.</p>
        <p className="">We get it. Let <p className="special"> our recommendation engine </p>be your guide! Answer a few questions about your needs , and we'll curate a personalized list of the <p className="special"> top 5 </p> gadgets for you.</p>
        </div>
    <div id="regBox">
    <p className="heading-input">Please select the electronic device you want to search fron the dropdown below</p>
    <select key={val} value={val} placeholder='Select Device' className="drop-down" onChange={handleChange}>

{options.map((option) => (

  <option key={option.label} value={option.value}>{option.label}</option>

))}
</select>
  </div>

   <Link className="text-center input-button " to={`/${val}`} role="button">NEXT</Link>
</div>
     </>
)
}

export default MyComponent