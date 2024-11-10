import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import bg from '../../assets/bg.png'

import Load from '../Load/load'
 
import '../../style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";



const Home = (props) => {

    let {title}=props;
    
      const [json, setJson] = useState([])
    
      const genAI = new GoogleGenerativeAI('AIzaSyCjjWu0AhbA4qAE0dLbUZ8uQAf-wHbB7aI');
    
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
      const [loading, setLoading] = useState(true);
    
    
      async function aiRun() {
    
        const prompt = `Describe this ${title} device with all specifications .give response in a JSON object . Each  object has a title "title”, price “price" (in inr), modelname , operating system, battery ram “ram” storage “ storage” camera “camera”.The resulting JSON object should be in this format: [{"title":,
      "price": ,
      "os":,
      "model": "",
      "battery": "",
      "ram": "",
      "storage": "",
      "processor":""
    },}] remove json word also. `;
   
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text)
        setJson(JSON.parse(text));
        setLoading(false)
        console.log(json)
        console.log(loading)
    
    
      }
    
    
    
      useEffect(() => {
        aiRun();
      },[json])
    
      
    

  return (
    <>

         
            {loading === true & json === null ?  <div className="flex"> <Load></Load> </div> :
             
                   <div className="card" >
                <div className="header flex-content">

                    <p className='product-name'>{title}</p>

                   
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Price</p>
                    <p className="price-tag">₹{json.price}</p>
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Model Name</p>
                    <p className='info'>{json.model}</p>
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Operating System</p>
                    <p className='info'>{json.os}</p>
                </div>
                <div className="column flex-content">
                    <p className='sub-category'> Processor</p>

                    <p className='info'>{json.processor}</p>
                </div>
                <div className=" column flex-content">
                    <p className='sub-category'>Storage</p>
                    <p className='info' >{json.storage}</p>
                </div>
            

            <div className="column flex-content">
              
                        <p className='sub-category'>RAM</p>
                        <p className='info'>{json.ram}</p>
                  
                </div>
           
            <div className="column flex-content">
                <p className='detail-category'>Battery</p>
                <p className='info'>{json.battery}</p>
            </div>
          
        </div >   
                
       
  }  
        </> 
    
  )
}

export default Home