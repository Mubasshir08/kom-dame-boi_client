import React from 'react'

const Appearance = () => {
  return (
    <div className='flex'>
      <h3>Appearance:</h3>
      <label htmlFor="light">light
        <input type="checkbox" className="checkbox" id='light'/>
      </label>
      <label htmlFor="dark">dark
        <input type="checkbox" className="checkbox" id='dark'/>
      </label>
    </div>
  )
}

export default Appearance