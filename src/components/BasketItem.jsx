import React from 'react'

export function BasketItem({ id, name, price, quantity }) {
  return (
    <li class='collection-item'>
      {name} х{quantity} = {price * quantity}
      <span className='secondary-content'>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  )
}
