import React from 'react'
import { useLocation } from 'react-router-dom'

const Second = () => {
  const { pathname } = useLocation()
  pathname = pathname.split('/')[2]
  console.log(pathname)
  return (
    <>
      {/* {pathname == '/first' ? 'jamo' : ''} */}
    </>
  )
}

export default Second