import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import bg from '../../assets/bg.png'
import HomeCard from './HomeCard'



const Home = () => {
const productInitial=[]
  const [products,setProducts]=useState(productInitial)

  let tokens = localStorage.getItem('token')

  const handleResponse = async()=>{
  const response = await fetch("http://localhost:5050/api/v1/product/getSearch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token :tokens}),

        });
        const json = await response.json();
        const data = await json.data;
        console.log(data)
        setProducts(data)
        console.log(products)
       
  }

  
  useEffect(()=>{
    handleResponse()
   
  },[])
  return (
    <>
    <div className='home-container'>
      <div className="left">
      <p className="text-center welcome-heading ">Welcome to <p className='appname'>"GeminiMatch"</p></p>
      <p className="about-heading">
        GeminiMatch is your go-to destination for personalized product recommendations tailored to your requirements.
        Powered by the cutting-edge Gemini AI API, we offer a seamless experience to find your perfect tech match, with personalized product recommendations tailored to your preferences..
        </p>
     
    <Link className="text-center btns " to="/input" role="button">Get Started</Link>

      </div>

      <div className="right">
        <img className="" src={bg} />
      </div>
    </div>
    <hr></hr>
    {tokens?
    <>
    <div className='heading-new'>Recent Searches</div>
    <div className="flex-product">
   { products.map((product)=> {
      return <HomeCard title={product.title} />
    })}
    </div>
    </>
:<></>}
        </>
  )
}

export default Home