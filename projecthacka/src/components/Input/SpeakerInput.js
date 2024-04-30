import React from 'react';
import { useState } from 'react';
import './laptop.css'
import Speaker from '../Product/Speaker'


function App() {

  const [submit,setSubmit]=useState(false)
  const [credentials, setCredentials] = useState({ company: "", price: "",wired:"" });
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
              <input type="radio" onChange={onChange} name="company" value="boat"  />
              <label className="labels" htmlFor="company">Boat</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="jbx"  />
              <label className="labels" htmlFor="company">JBX</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="zebronics"  />
              <label className="labels" htmlFor="company">Zebronics</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="sony"  />
              <label className="labels" htmlFor="company">Sony</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="all"  />
              <label className="labels" htmlFor="prcompanyice">All</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Select a specific range of price</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="500-1500"  />
              <label className="labels" htmlFor="price">₹500-1,500</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="1500-5000"  />
              <label className="labels" htmlFor="price">₹1,500-5,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="5,000-10,000"  />
              <label className="labels" htmlFor="price">₹5,000-10,00</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="10,000-15,000"  />
              <label className="labels" htmlFor="price">₹10,000-15,000</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="above 15,000"  />
              <label className="labels" htmlFor="price">Above 15,000</label>
            </div>

         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="wired/wireless" className="form-label">Select wired/wireless ?</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="wired"  />
              <label className="labels" htmlFor="wired/wireless">Wired</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="wireless"  />
              <label className="labels" htmlFor="wired/wireless">Wireless</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="both"  />
              <label className="labels" htmlFor="wired/wireless">Both</label>
            </div>         
          </div>
        </div>
        <div type='submit' className="text-center btns" onClick={handleSubmit}>Submit </div>
     
      </form>
     
      </div>:<><div className='output-heading'>These are TOP 5 BEST LATEST device as per your specifications</div><Speaker company={credentials.company} ram={credentials.ram} price={credentials.price} storage={credentials.storage}></Speaker></>}
   
    </>
  );
}

export default App;
