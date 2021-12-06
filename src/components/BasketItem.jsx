import React, { useContext } from 'react'
import { ShopContext } from '../context'

export function BasketItem({ id, name, price, quantity }) {
  const { removeFromBasket, decQuantity, incQuantity } = useContext(ShopContext)
  return (
    <li className='collection-item'>
      {name}{' '}
      {quantity === 1 ? (
        <i onClick={() => removeFromBasket(id)} className='material-icons basket-quantity'>
          remove
        </i>
      ) : (
        <i onClick={() => decQuantity(id)} className='material-icons basket-quantity'>
          remove
        </i>
      )}{' '}
      х{quantity}{' '}
      <i onClick={() => incQuantity(id)} className='material-icons basket-quantity'>
        add
      </i>{' '}
      = {price * quantity}
      <span
        onClick={() =>
          incQuantity({
            id,
            name,
            price,
            quantity,
          })
        }>
        {' '}
        v-bucks
      </span>
      <span onClick={() => removeFromBasket(id)} className='secondary-content'>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  )
}
