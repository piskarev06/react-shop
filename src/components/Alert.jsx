import React, { useEffect, useContext } from 'react'

import { ShopContext } from '../context'

export function Alert() {
  const { alertName = '', closeAlert } = useContext(ShopContext)

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [name])
  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} добавлен в корзину</div>
    </div>
  )
}
