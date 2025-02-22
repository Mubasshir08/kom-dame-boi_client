import React from 'react';
import { IoBook } from "react-icons/io5";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../../redux/PostSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.post);
  // console.log(popup)
  const popupHandler = () => {
    dispatch(setPopup(!popup));
  }
  return (
    <div className="navbar px-4 bg-base-100 sticky top-0 z-10 border-b-2 border-b-base-content/10 mb-5 pb-3">

      <div className="navbar-start">
        <Link to='/reader'>
          <div className="avatar cursor-pointer">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </Link>
      </div>
      <div className='navbar-center'>
        <Link to='/'>
          <button className='btn btn-neutral'>
            B
          </button>
        </Link>
      </div>

      <div className="navbar-end gap-x-3 md:gap-x-4">
        <button className='btn btn-square text-2xl' onClick={popupHandler}>+</button>
        <button className='btn btn-ghost btn-neutral'>
          <IoBook />
        </button>
        <Link to='/reader/notification'>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className='bg-red-400 w-3 h-3 rounded-full absolute end-0'></span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar