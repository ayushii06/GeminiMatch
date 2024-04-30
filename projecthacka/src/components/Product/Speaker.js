import React, { useState, useEffect } from 'react'
import '../../style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";
import SpeakerOutput from './SpeakerOutput'
import Load from '../Load/load'


function ProductCard(props) {

  const [json, setJson] = useState(null)

  const genAI = new GoogleGenerativeAI("AIzaSyDC22XGHoChPYXYQR0zjFshqp9J7sZdnU8");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let { company, price, wired } = props;

  const [loading, setLoading] = useState(true);


  async function aiRun() {

    const prompt = `Suggest 5 speakers of ${company} company in price range ${price} INR with ${wired}setup a with all specifications .create a JSON object which enumerates a set of 5 child objects. Each child object has a title "title”, price “price", modelname , operating system, battery ram “ram” storage “ storage” camera “camera”.The resulting JSON object should be in this format: [{"title":,
  "price": ,
  "model": "",
  "os": "Android 12",
  "battery": "5000mAh",
  "ram": "4GB",
  "storage": "32GB",
  "camera": "50MP (wide) + 5MP (ultrawide) + 2MP (macro) + 2MP (depth)"
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
  })

  return (
    <>
      <div className="flex">
        {loading === true & json === null ? <Load></Load> :
          json.map((product) => {
            return <SpeakerOutput title={product.title} price={product.price} model={product.model} os={product.os} battery={product.battery}  />
          })
        }
      </div>

    </>
  )
}

export default ProductCard