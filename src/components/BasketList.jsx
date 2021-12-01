import React from 'react'

import { BasketItem } from './BasketItem'

export function BasketList({
  order,
  handleBasketShow,
  deleteBasketItem,
  incrementQuantity,
  decrementQuantity,
}) {
  const totalPrice = order.reduce((acc, el) => {
    return acc + el.price * el.quantity
  }, 0)

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((el) => (
          <BasketItem
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
            deleteBasketItem={deleteBasketItem}
            key={el.id}
            {...el}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>Общая стоимость: {totalPrice} V-BUCKS</li>
      <i onClick={handleBasketShow} className='material-icons basket-close'>
        close
      </i>
    </ul>
  )
}
