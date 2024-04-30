import React from 'react';
import { useState } from 'react';
import './laptop.css'
import Mobile from '../Product/Mobile'


function App() {

  const [submit,setSubmit]=useState(false)
  const [credentials, setCredentials] = useState({ company: "", ram: "",storage:"", price: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  function handleSubmit(){
      setSubmit(true)
  }


  return (
   
    <>
      
    {submit===false? <div className="App">
      <form >
      <div className='Heading-form'>Please select the option that best describes what you're looking for today</div>
    
        <div className="form-group">
          <label htmlFor="company" className="form-label">Select a specific company or select all</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="samsung"  />
              <label className="labels" htmlFor="price">Samsung</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="oppo"  />
              <label className="labels" htmlFor="price">Oppo</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="vivo"  />
              <label className="labels" htmlFor="price">Vivo</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="apple"  />
              <label className="labels" htmlFor="price">Apple</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Select a specific range of price</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="15,000-30,000"  />
              <label className="labels" htmlFor="price">₹15,000-30,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="30,000-45,000"  />
              <label className="labels" htmlFor="price">₹30,000-45,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="45,000-65,000"  />
              <label className="labels" htmlFor="price">₹45,000-65,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="65,000-1,20,000"  />
              <label className="labels" htmlFor="price">₹65,000-1,20,000</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>

         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="storage" className="form-label">Select storage</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="32GB"  />
              <label className="labels" htmlFor="price">32 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="64GB"  />
              <label className="labels" htmlFor="price">64 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="128GB"  />
              <label className="labels" htmlFor="price">128 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="256GB"  />
              <label className="labels" htmlFor="price">256 GB</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ram" className="form-label">RAM</label>
          <div className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="2 GB"  />
              <label className="labels" htmlFor="price">2 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="4 GB"  />
              <label className="labels" htmlFor="price">4 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="6 GB"  />
              <label className="labels" htmlFor="price">6 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="8 GB"  />
              <label className="labels" htmlFor="price">8 GB OR MORE</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
          </div>
        
        </div>
        


       
        <div type='submit' className="text-center btns" onClick={handleSubmit}>Submit </div>

      </form>
      </div>:<><div className='output-heading'>These are TOP 5 BEST LATEST device as per your specifications</div><Mobile company={credentials.company} ram={credentials.ram} price={credentials.price} storage={credentials.storage}></Mobile></>}
   
    </>
  );
}

export default App;
