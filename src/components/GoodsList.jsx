import React, { useContext } from 'react'
import { ShopContext } from '../context'

import { GoodsItem } from './GoodsItem'

export function GoodsList() {
  const { goods = [] } = useContext(ShopContext)

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
