import React from 'react'
import ProductDesc from './ProductDesc'

function ProductDetail(props) {
  let {title,desc,price}=props
 
  return (
    <>
      <div className='title'>Here are the results of your search</div>
      <div className="flex">
        <div>{title}</div>
        <div>{desc}</div>
        
      </div>
     
     
    </>
  )
}

export default ProductDetail