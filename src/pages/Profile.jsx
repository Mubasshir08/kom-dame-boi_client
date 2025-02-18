import React from 'react'
import { FaRegEdit } from 'react-icons/fa'

const Profile = () => {
    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-sm w-1/2 mx-auto">
                <figure className='md:w-1/2'>
                    <img
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                        alt="Reader" 
                        className='w-full'/>
                </figure>
                <div className="card-body">
                    <div className='relative flex items-center mx-auto'>
                    <h2 className="font-bold text-lg">Sofia</h2>
                    <button className='absolute left-26 md:left-30 hover:text-primary'>
                        <FaRegEdit className=''/>
                    </button>
                    </div>
                    <p className='text-center'>What's up guys 😇</p>
                    <div className='flex flex-row mb-10 mx-auto md:ml-8'>
                        <div className='flex flex-col items-center'>
                            <h3>55</h3>
                            <h3>Sell</h3>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className='flex flex-col items-center'>
                            <h3>50</h3>
                            <h3>Buy</h3>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className='flex flex-col items-center'>
                            <h3>550</h3>
                            <h3>Followers</h3>
                        </div>
                    </div>
                    <div className="card-actions justify-end mt-2 md:mt-0">
                        <button className='btn btn-square btn-primary flex-1 hover:btn-neutral'>Follow Me</button>
                        <button className="btn btn-square btn-ghost btn-primary">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile