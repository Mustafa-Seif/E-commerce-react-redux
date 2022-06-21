import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  const product = useSelector((state)=>state)
  return (
    <>
      <NavLink to='/cart' className='btn btn-outline-primary'>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart ({product.length})

      </NavLink>
    </>
  )
}

export default CartBtn