import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-1/4 h-screen border-r-2 -mt-5'>
        <div className='px-3 mt-5'>
            <Link to='/reader/setting/general' className='block w-full mt-3 hover:bg-secondary hover:text-base-200 py-2 pl-2 '>General</Link>
            <Link to='/reader/setting/theme' className='block w-full mt-3 hover:bg-secondary hover:text-base-200 py-2 pl-2'>Appearance</Link>
            <Link  to='/reader/setting/security' className='block w-full mt-3 hover:bg-secondary hover:text-base-200 py-2 pl-2'>Security</Link>
        </div>
    </div>
  )
}

export default Sidebar