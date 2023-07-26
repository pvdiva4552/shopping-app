import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'
const FilteredProducts = () => {
  const products=useSelector((product)=>product.products.filteredProducts)
  const {type}=useParams()
  console.log('Looking for ',products,'and',type)
  return (
    <div className='flex-containerfilter'>
      <p>Looking for <span>{type}</span></p>
      <div className='flexfilter'>
        {
          products.map((eachProduct)=>
            <div className='flex-itemfilter'>
              <div className="imagediv">
                <img src={eachProduct.img} />
              </div>
              <p className='productname'><b>{eachProduct.name}</b></p>
              <p>{eachProduct.text}</p>
              <div className='priceandcolors'>
                <p className='productprice'>Rs {eachProduct.price} /-</p>
                {
                  eachProduct.color.map((color)=><span style={{'backgroundColor':color}} className='colorsavailable'></span>)
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FilteredProducts