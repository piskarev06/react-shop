import React from 'react'

import { GoodsItem } from './GoodsItem'

export function GoodsList({ goods = [] }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map((el) => (
        <GoodsItem key={el.id} {...el} />
      ))}
    </div>
  )
}
