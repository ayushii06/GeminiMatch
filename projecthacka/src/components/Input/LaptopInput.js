import React from 'react';
import { useState } from 'react';
import './laptop.css'
import Laptop from '../Product/Laptop'


function App() {

  const [submit,setSubmit]=useState(false)
  const [credentials, setCredentials] = useState({ company: "", category: "",price:"", processor: "" ,ram:""});
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
              <input type="radio" onChange={onChange} name="company" value="dell"  />
              <label className="labels" htmlFor="price">Dell</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="hp"  />
              <label className="labels" htmlFor="price">HP</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="mac"  />
              <label className="labels" htmlFor="price">MAC</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="asus"  />
              <label className="labels" htmlFor="price">ASUS</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">Select the category?</label>
          <div className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="gaming"  />
              <label className="labels" htmlFor="price">Gaming Laptop</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="everyday-use"  />
              <label className="labels" htmlFor="price">Everyday Use</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="education"  />
              <label className="labels" htmlFor="price">Educational Use</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="performance"  />
              <label className="labels" htmlFor="price">Performance</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="price">ALL</label>
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
          <label htmlFor="storage" className="form-label">Select the processor requirements</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="i3"  />
              <label className="labels" htmlFor="price">Core i3</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="i5"  />
              <label className="labels" htmlFor="price">Core i5</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="i7"  />
              <label className="labels" htmlFor="price">Core i7</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="i9"  />
              <label className="labels" htmlFor="price">Core i9</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ram" className="form-label">What about the RAM Capacity?</label>
          <div className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="4 GB"  />
              <label className="labels" htmlFor="price">4 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="8 GB"  />
              <label className="labels" htmlFor="price">8 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="16 GB"  />
              <label className="labels" htmlFor="price">16 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="32 GB"  />
              <label className="labels" htmlFor="price">32 GB OR MORE</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="64 GB"  />
              <label className="labels" htmlFor="price">64GB</label>
            </div>
          </div>
        
        </div>
        

        <div type='submit' className="text-center btns" onClick={handleSubmit}>Submit </div>

       
     
      </form>
      </div>:<><div className='output-heading'>These are TOP 5 BEST LATEST device as per your specifications</div><Laptop company={credentials.company} ram={credentials.ram} price={credentials.price} storage={credentials.storage}></Laptop></>}
   
    </>
  );
}

export default App;
