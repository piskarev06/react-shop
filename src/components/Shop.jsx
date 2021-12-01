import React, { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'

import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'

export function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)

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
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  )
}
