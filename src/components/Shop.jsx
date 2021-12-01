import React, { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'

import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import { BasketList } from './BasketList'
import { Alert } from './Alert'

export function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const incrementQuantity = (id) => {
    const newOrder = order.map((el) => {
      if (el.id === id) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  }

  const decrementQuantity = (id) => {
    const newOrder = order.map((el) => {
      if (el.id === id) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  }

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }

      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })

      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const deleteBasketItem = (id) => {
    setOrder(
      order.filter((el) => {
        return el.id !== id
      }),
    )
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const closeAlert = () => {
    setAlertName('')
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      // prettier-ignore
      headers: {
        'Authorization': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
      {isBasketShow && (
        <BasketList
          deleteBasketItem={deleteBasketItem}
          order={order}
          handleBasketShow={handleBasketShow}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}
