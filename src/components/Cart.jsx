import React, { useContext } from 'react'
import { ShopContext } from '../context'

export function Cart() {
  const { order = 0, handleBasketShow } = useContext(ShopContext)
  const quantity = order.length
  return (
    <div onClick={handleBasketShow} className='cart blue darken-3 white-text'>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
