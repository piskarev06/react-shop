import React from 'react'

import { BasketItem } from './BasketItem'

export function BasketList({ order, handleBasketShow }) {
  const totalPrice = order.reduce((acc, el) => {
    return acc + el.price * el.quantity
  }, 0)

  return (
    <ul class='collection basket-list'>
      <li class='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((el) => <BasketItem key={el.id} {...el} />)
      ) : (
        <li class='collection-item'>Корзина пуста</li>
      )}
      <li class='collection-item active'>Общая стоимость: {totalPrice} V-BUCKS</li>
      <i onClick={handleBasketShow} className='material-icons basket-close'>
        close
      </i>
    </ul>
  )
}
