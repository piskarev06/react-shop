import React from 'react'

export function GoodsItem({ id, name, description, price, full_background, addToBasket }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img alt={name} src={full_background} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
          className='btn'>
          Купить
        </button>
        <span style={{ fontSize: '1.5rem' }} className='right'>
          {price} V-Bucks
        </span>
      </div>
    </div>
  )
}
