import React from 'react'
import { IoEnterOutline } from 'react-icons/io5'

const Notification = () => {
  return (
    <div className='container px-5'>
        <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">notifications</li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>Dio Lupa</div>
      <div className="text-xs font-semibold opacity-60">replied to your comment</div>
    </div>
    <button className="btn btn-ghost btn-square text-2xl">
    <IoEnterOutline/>
    </button>
  </li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div>
      <div>Ellie Beilish</div>
      <div className="text-xs font-semibold opacity-60">❤️ liked your post</div>
    </div>
    <button className="btn btn-ghost btn-square text-2xl">
    <IoEnterOutline/>
    </button>
  </li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div>
      <div>Sabrino Gardener</div>
      <div className="text-xs font-semibold opacity-60">followed you</div>
    </div>
    <button className="btn btn-ghost btn-square text-2xl">
    <IoEnterOutline/>
    </button>
  </li>
  
</ul>
    </div>
  )
}

export default Notification