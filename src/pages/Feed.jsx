import React from 'react'
import Card from '../shared/card/Card'
import Post from '../shared/Post'

const Feed = () => {
  return (
    <div className='container px-3 mb-3'>
      <Post />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Feed