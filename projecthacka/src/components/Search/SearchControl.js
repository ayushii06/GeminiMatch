import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../../style.css'
import heartsvg from '../../assets/svg/heartsvg.svg'
import { GoogleGenerativeAI } from "@google/generative-ai";
import ProductDesc from '../Product/ProductDesc'
import Load from '../Load/load'

function SearchControl(props) {
    const prompts=props.prompt;
    console.log(prompts)
    const [json, setJson] = useState(null)

    const genAI = new GoogleGenerativeAI("AIzaSyDC22XGHoChPYXYQR0zjFshqp9J7sZdnU8");//so that judges can run and test the code
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    const [loading, setLoading] = useState(true);
   
    async function aiRun() {
  
      const prompt = `Provide me details of this ${prompts} device and show output in a "JSON object" only with title , desc, price(in inr) of the device.Provide detailed description including for whom it will suitable for and its advantages and disadvantages/ The resulting JSON object should be in this format only so that it can be parsed into json: [{title:,desc:,price: ,suitable:,advantage:,disadvantage:  },}] remove json word also. `;
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
    },[])

  return (
    <>
        <div className="flex-top">
        {loading === true & json === null ? <div className='bar'> <Load></Load> </div>:
          <div className='top'>
       
            <div className="right">
       
                <div className='title-content'>
                  <p className="title">{json.title}</p>
                </div>
    
                <div className="price">Price -  ₹ {json.price}</div>
              
    
                <p className="product-detail title">Product Description</p>
                <p className="desc ">{json.desc} </p>
                <p className="product-detail title">Advantages</p>
                <p className="desc ">{json.advantage} </p>
                <p className="product-detail title">Drawbacks</p>
                <p className="desc ">{json.disadvantage} </p>
                <p className="product-detail title">Most Suitable For</p>
                <p className="desc ">{json.suitable} </p>


             
           
            </div>
          </div>
          }
        
      </div>



    </>
  )
}

export default SearchControl