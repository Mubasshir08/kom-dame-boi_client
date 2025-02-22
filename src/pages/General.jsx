import React, { useState } from 'react'

const General = () => {
  const [userName, setUserName] = useState("H");
  return (
    <div className='w-1/3 ml-5'>
      <div className='py-3'>
        <h3 className='pb-2'>Full Name</h3>
        <div className="tooltip tooltip-right" data-tip="can't be changed">
          <input type="text" disabled placeholder={"Mubasshir"} className='w-80 input input-primary focus:outline-none' />
        </div>
      </div>
      <div className='flex flex-col py-3'>
        <h3 className='pb-2'>User Name</h3>
        <input type="text" value={userName} className='input input-primary focus:outline-none' onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className='flex flex-col'>
        <h3 className='pb-2'>Password</h3>
        <input type="text" value={userName} className='input input-primary focus:outline-none' onChange={(e) => setUserName(e.target.value)} />
      </div>
    </div>
  )
}

export default General