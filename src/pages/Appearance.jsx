import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/ThemeSlice';

const Appearance = () => {
  const dispatch = useDispatch();
  const {islight} = useSelector(state => state.theme)
  // const [islight, setIsLight] = useState(true);
  const handleThemeChange = () => {
    dispatch(setTheme(!islight));
  }
  return (
    <div className='flex gap-x-2'>
      <h3>Appearance:</h3>
      <label htmlFor="light">light
        <input type="checkbox" className="checkbox theme-controller ml-1" id='light' value={"caramellatte"} checked={islight} onClick={handleThemeChange}/>
      </label>
      <label htmlFor="dark">dark
        <input type="checkbox" className="checkbox theme-controller ml-1" id='dark' value={"black"} checked={!islight} onClick={handleThemeChange}/>
      </label>
    </div>
  )
}

export default Appearance