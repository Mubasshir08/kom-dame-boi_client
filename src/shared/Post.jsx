import React from 'react'

const Post = () => {
  return (
    <div className='w-1/2 absolute bg-base-100 border border-neutral z-10 rounded-md translate-x-77'>
      <form action="" className='px-3'>
        <h3 className='text-center text-lg'>Post</h3>
        <select className="focus:outline-none border-primary rounded-md ml-10 mt-5 p-1">
          <option defaultChecked = {true}>Sell</option>
          <option>Regular</option>
        </select>
        <textarea name="" id="" className='resize-none border-none focus:outline-none w-7/8 ml-10 my-3' placeholder='Description ...'></textarea>
        <button className="btn btn-neutral w-7/8 ml-10 my-5">Post</button>
      </form>
    </div>
  )
}

export default Post

