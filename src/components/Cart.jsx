import React from 'react'

export function Cart({ quantity = 0, handleBasketShow }) {
  return (
    <div onClick={handleBasketShow} className='cart blue darken-3 white-text'>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
