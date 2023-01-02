import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const RouterLayout:React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RouterLayout