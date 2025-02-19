import React, { useEffect, useState } from 'react'
import Card from '../shared/card/Card'
import Post from '../shared/Post'
import { useSelector } from 'react-redux'
const Feed = () => {
  const [popup, setPopup] = useState(false);
  const IsPopupShow = useSelector((state) => state.post.popup);
  useEffect(()=>{
    // console.log(IsPopupShow);
    setPopup(IsPopupShow);
    // console.log(popup);
  },[IsPopupShow])
  return (
    <div className='container px-3 mb-3'>
      { popup && <Post />}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Feed