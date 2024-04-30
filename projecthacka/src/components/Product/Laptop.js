import React, { useState, useEffect } from 'react'
import '../../style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";
import LapOutput from './LapOutput'
import Load from '../Load/load'


function ProductCard(props) {

  const [json, setJson] = useState(null)

  const genAI = new GoogleGenerativeAI("AIzaSyDC22XGHoChPYXYQR0zjFshqp9J7sZdnU8");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let { company,category,price,processor,ram } = props;

  const [loading, setLoading] = useState(true);


  async function aiRun() {

    const prompt = `Suggest 5 laptop of ${company} company in category ${category} price range ${price} INR with ${ram}RAM and ${processor} processor with all specifications .create a JSON object which enumerates a set of 5 child objects. Each child object has a title "title”, price “price", modelname , operating system, battery ram “ram” storage “ storage” camera “camera”.The resulting JSON object should be in this format: [{"title":,
  "price": ,
  "model": "",
  "battery": "",
  "ram": "",
  "storage": "",
  "processor":""
},}] remove json word also. `;
console.log(prompt)
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
  })

  return (
    <>
      <div className="flex">
        {loading === true & json === null ? <Load></Load> :
          json.map((product) => {
            return  <LapOutput title={product.title} ram={product.ram} processor={product.processor} price={product.price} model={product.model} os={product.os} battery={product.battery} storage={product.storage}  />
           
          })
  
        }
     </div>

    </>
  )
}

export default ProductCard