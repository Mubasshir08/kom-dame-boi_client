import React from 'react'

const Security = () => {
  return (
    <div className='w-1/3 ml-5'> 
        <h3 className='pb-2'>Change Password</h3>
      <form className='flex flex-col gap-y-3'>
        <input type="text" className='input input-primary input-sm focus:outline-none' placeholder='Current Password'/>
        <input type="text" className='input input-primary input-sm focus:outline-none' placeholder='New Password'/>
        <input type="text" className='input input-primary input-sm focus:outline-none' placeholder='Confirm Password'/>
        <div className='flex gap-x-3'>
          <button type='reset' className='btn btn-sm'>Reset</button>
          <button type='submit' className='btn btn-error btn-sm text-white'>Change Password</button>
        </div>
      </form>
    </div>
  )
}

export default Security