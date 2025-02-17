import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card card-compact bg-base-100 lg:w-[40rem] shadow-xl mx-auto mb-5">
  <figure className='h-80'>
    <img
      src="https://images.unsplash.com/photo-1577627444534-b38e16c9d796?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="book" 
      className=''/>
      <FaBookmark className='absolute top-3 right-4 text-xl text-primary-content'/>
  </figure>
  <div className="card-body">
    <div className='flex items-center justify-between'>
        <h2 className="card-title">Books!</h2>
        <div className='border border-primary p-1 mr-1.5'>BDT 500/-</div>
    </div>
    <p className='w-3/4 md:w-5/6 mb-2 text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, corporis.</p>
    <div className="card-actions items-center justify-between">
    <div className="avatar cursor-pointer items-center gap-x-1">
          <div className="w-9 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <h3>posted by msr0012</h3>
        </div>
      <button className="btn btn-primary hover:btn-error">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card