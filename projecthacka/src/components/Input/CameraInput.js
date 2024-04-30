import React from 'react';
import { useState } from 'react';
import './laptop.css'
import Camera from '../Product/Camera'


function App() {

  const [submit,setSubmit]=useState(false)
  const [credentials, setCredentials] = useState({ company: "", price: "",type:"", megapixel: "" });
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
      <div className='Heading-form' >Please select the option that best describes what you're looking for today</div>
    
        <div className="form-group">
          <label htmlFor="company" className="form-label">Select a specific company or select all</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="canon"  />
              <label className="labels" htmlFor="price">Canon</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="sony"  />
              <label className="labels" htmlFor="price">Sony</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="fujifilm"  />
              <label className="labels" htmlFor="price">Fujifilm</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="go pro"  />
              <label className="labels" htmlFor="price">Go Pro</label>
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
              <input type="radio" onChange={onChange} name="price" value="5,000-15,000"  />
              <label className="labels" htmlFor="price">₹5,000-15,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="15,000-30,000"  />
              <label className="labels" htmlFor="price">₹15,000-30,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="30,000-55,000"  />
              <label className="labels" htmlFor="price">₹30,000-55,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="55,000-75,000"  />
              <label className="labels" htmlFor="price">₹55,000-75,000</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>

         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="storage" className="form-label">Select the type</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="camera" value="mirrorless"  />
              <label className="labels" htmlFor="price">Mirrorless</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="camera" value="dslr"  />
              <label className="labels" htmlFor="price">DSLR</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="camera" value="sports and action"  />
              <label className="labels" htmlFor="price">Sports and Action</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="camera" value="camcorder"  />
              <label className="labels" htmlFor="price">Camcorder</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="camera" value="all"  />
              <label className="labels" htmlFor="price">All</label>
            </div>
         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ram" className="form-label">What about Megapixel?</label>
          <div className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="megapixel" value="below 6"  />
              <label className="labels" htmlFor="megapixel">Below 6MP</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="megapixel" value="8-9.9"  />
              <label className="labels" htmlFor="megapixel">8-9.9 MP</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="megapixel" value="10-15.9"  />
              <label className="labels" htmlFor="megapixel">10-15.9 MP</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="megapixel" value="18-23.99"  />
              <label className="labels" htmlFor="megapixel">18-23.99 MP</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="megapixel" value="above 24"  />
              <label className="labels" htmlFor="megapixel">Above 24 MP</label>
            </div>
          </div>
        
        </div>
        
        <div type='submit' className="text-center btns" onClick={handleSubmit}>Submit </div>

      </form>
      </div>:<><div className='output-heading'>These are TOP 5 BEST LATEST device as per your specifications</div><Camera company={credentials.company} megapixel={credentials.megapixel} price={credentials.price} type={credentials.type}></Camera></>}
   
    </>
  );
}

export default App;
