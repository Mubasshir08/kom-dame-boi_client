import React from 'react'
import Sidebar from '../shared/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Settings