import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../redux/PostSlice';

const Post = () => {
  const dispatch = useDispatch();
    const {popup} = useSelector((state) => state.post);
    // console.log(popup)
    const popupHandler = (e) => {
      e.preventDefault();
      dispatch(setPopup(!popup));
    }
  return (
    <div className='w-1/2 absolute bg-base-100 border border-neutral z-10 rounded-md translate-x-77'>
      <form action="" className='px-3 relative'>
        <h3 className='text-center text-lg'>Post</h3>
        <button className="btn btn-neutral btn-circle absolute top-2 right-3 " onClick={popupHandler}>x</button>
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

