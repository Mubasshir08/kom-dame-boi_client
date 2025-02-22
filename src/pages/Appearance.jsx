import React, { useState } from 'react'

const Appearance = () => {
  const [islight, setIsLight] = useState(true);
  const handleThemeChange = () => {
    setIsLight(!islight);
  }
  return (
    <div className='flex'>
      <h3>Appearance:</h3>
      <label htmlFor="light">light
        <input type="checkbox" className="checkbox theme-controller" id='light' value={"caramellatte"} checked={islight} onClick={handleThemeChange}/>
      </label>
      <label htmlFor="dark">dark
        <input type="checkbox" className="checkbox theme-controller" id='dark' value={"black"} checked={!islight} onClick={handleThemeChange}/>
      </label>
    </div>
  )
}

export default Appearance