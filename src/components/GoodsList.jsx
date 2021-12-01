import React from 'react'

import { GoodsItem } from './GoodsItem'

export function GoodsList({ goods = [], addToBasket }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map((el) => (
        <GoodsItem addToBasket={addToBasket} key={el.id} {...el} />
      ))}
    </div>
  )
}
