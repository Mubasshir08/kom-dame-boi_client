import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
    <Navbar /> {/* Now Link will have context */}
    <div className='divider -mt-1 '></div>
    <Outlet /> {/* Renders the child route */}
  </div>
  )
}

export default Layout