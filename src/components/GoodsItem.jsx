import React from 'react'

export function GoodsItem({ id, name, description, price, full_background }) {
  return (
    <div class='card'>
      <div class='card-image'>
        <img alt={name} src={full_background} />
      </div>
      <div className='card-content'>
        <span class='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn'>Купить</button>
        <span style={{ fontSize: '1.8rem' }} className='right'>
          {price} VBuks
        </span>
      </div>
    </div>
  )
}
