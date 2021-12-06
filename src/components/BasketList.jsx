import React, { useContext } from 'react'
import { ShopContext } from '../context'

import { BasketItem } from './BasketItem'

export function BasketList() {
  const { handleBasketShow, order = [] } = useContext(ShopContext)

  const totalPrice = order.reduce((acc, el) => {
    return acc + el.price * el.quantity
  }, 0)

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((el) => <BasketItem key={el.id} {...el} />)
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
