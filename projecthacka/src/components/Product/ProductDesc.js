import React,{useState} from 'react'
import heartsvg from '../../assets/svg/heartsvg.svg'
import './ProductDesc.css'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Load from '../Load/load'
import './Feature.css'
import cross from '../../assets/svg/cross.svg'

function ProductDesc(props) {

    let { title, price, model, os, battery, camera, ram, storage } = props;

    let [click,setClick]=useState(false);

    const [json, setJson] = useState(null)

    const genAI = new GoogleGenerativeAI("AIzaSyDC22XGHoChPYXYQR0zjFshqp9J7sZdnU8");//so that judges can run and test the code
    const models = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    const [loading, setLoading] = useState(true);
   
    async function aiRun() {
        setClick(true)
  
      const prompt = `Provide me details of this ${title} device and show output in a "JSON object" only with title , desc, price(in inr) of the device.Provide detailed description including for whom it will suitable for and its advantages and disadvantages. The resulting JSON object should be in this format: [{title:,desc:,price: ,suitable:,advantage:,disadvantage:  },}] remove json word also. JSON output should be perfect `;
      const result = await models.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text)
      setJson(JSON.parse(text));
      setLoading(false)
      console.log(json)
      console.log(loading)
  
    }

    function handleClick(){
        setClick(false)
    }



    return (
        <>
             {click? <div className="loading-feature" style={{"position":"relative","top":"-18vw"}}>
        {loading === true & json === null ? <Load></Load> :
          <div className='flex-top-feature'>
       
            <div className="right">
       
                <div className='title-content-feature'>
                  <p className="title-feature">{json.title}</p>
                  <div><img style={{"height":"6vh","cursor":"pointer"}} src={cross} onClick={handleClick}></img></div>
                </div>
    
                <div className="price-feature">Price -  ₹ {json.price}</div>
              
    
                <p className="product-detail-feature title">Product Description</p>
                <p className="desc-feature ">{json.desc} </p>
                <p className="product-detail-feature title">Advantages</p>
                <p className="desc-feature ">{json.advantage} </p>
                <p className="product-detail-feature title">Drawbacks</p>
                <p className="desc-feature ">{json.disadvantage} </p>
                <p className="product-detail-feature title">Most Suitable For</p>
                <p className="desc-feature ">{json.suitable} </p>


             
           
            </div>
          </div>}
          </div> 
          :<></>
        }
      
            <div className="card" >
                <div className="header flex-content">

                    <p className='product-name'>{title}</p>

                    <img alt='wishlist-svg' className="image-svg" src={heartsvg} />
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Price</p>
                    <p className="price-tag">₹{price}</p>
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Model Name</p>
                    <p className='info'>{model}</p>
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Operating System</p>
                    <p className='info'>{os}</p>
                </div>
                <div className="column flex-content">
                    <p className='sub-category'> Camera</p>

                    <p className='info'>{camera}</p>
                </div>
                <div className=" column flex-content">
                    <p className='sub-category'>Storage</p>
                    <p className='info' >{storage}</p>
                </div>
            

            <div className="column flex-content">
              
                        <p className='sub-category'>RAM</p>
                        <p className='info'>{ram}</p>
                  
                </div>
           
            <div className="column flex-content">
                <p className='detail-category'>Battery</p>
                <p className='info'>{battery}</p>
            </div>
            <div className='feature-btn' onClick={aiRun}>Features</div>
        </div >   
       
    </>
  )
}

export default ProductDesc