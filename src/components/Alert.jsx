import React, { useEffect } from 'react'

export function Alert({ name = '', closeAlert }) {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [name])
  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  )
}
