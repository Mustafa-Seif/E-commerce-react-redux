import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeItem } from '../Redux/actions/actions'


const Cart = () => {
  const product = useSelector((state)=>state)
  const dispatch = useDispatch()
  const handleClose =(item)=>{
    dispatch(removeItem(item))
  }


  const emptyCart =()=>{
    return (
      <h3>no item</h3>
    )
  }

  const chechOut =()=>{
    return (
      <div className="container mb-5">
        <div className="row">
          <NavLink to='/checkout' className='btn btn-outline-primary'>Procced To Checkout</NavLink>
        </div>
      </div>
    )
  }

  const items =(item)=>{
    return(
      <div className="px-4 my-5 bg-light" key={item.id}>
      <div className="container py-4">
        <button className='btn-close float-end' onClick={()=>handleClose(item)}></button>
        <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} height='200px' width='180px' />
        </div>
          <div className="col-md-4">
            <h3>{item.title} </h3>
            <p className='fw-bold'>${item.price} </p>
          </div>
        </div>
      </div>
    </div>
    )
    
  }

  return (
    <>
      {product.length !==0 && product.map(items)}
      {product.length !==0 && chechOut()}
  
      {product.length ===0 && emptyCart()}
    </>
  )
}

export default Cart