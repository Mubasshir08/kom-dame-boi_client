import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFeed, MdOutlineShoppingBag } from 'react-icons/md'

const MenuBar = () => {
  return (
    <ul className="menu bg-base-200 rounded-box md:hidden -translate-y-80">
  <li>
    <Link to = '/reader/post' className="tooltip tooltip-right" data-tip="Post">
    <MdOutlineFeed className='h-5 w-5' />
    </Link>
  </li>
  <li>
    <Link to = '/reader/buy' className="tooltip tooltip-right" data-tip="Buy">
    <MdOutlineShoppingBag className='h-5 w-5' />
    </Link>
  </li>
  <li>
    <Link to = '/reader/sell' className="tooltip tooltip-right" data-tip="Sell">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </Link>
  </li>
</ul>
  )
}

export default MenuBar