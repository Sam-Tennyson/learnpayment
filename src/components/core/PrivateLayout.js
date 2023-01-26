import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateLayout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default PrivateLayout