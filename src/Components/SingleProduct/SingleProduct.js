import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const SingleProduct = () => {

  const {type,id}=useParams()
  const selectedproduct=useSelector((prod)=>prod.products.selectedProduct)[0];
  console.log("product",selectedproduct.id)
  return (
    <>
        <div>SingleProduct {type} and {id} and {selectedproduct.name}</div>
        <div class=''>
            
        </div>
    </>
  )
}

export default SingleProduct