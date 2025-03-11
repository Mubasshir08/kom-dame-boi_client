import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Post from '../shared/popup/Post'


const Layout = () => {
  return (
    <div className='container'>
    <Navbar /> {/* Now Link will have context */}
    <Post />
    <Outlet /> {/* Renders the child route */}
  </div>
  )
}

export default Layout