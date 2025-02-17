import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm w-1/2 mx-auto">
                <figure className='w-1/2'>
                    <img
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                        alt="Reader" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
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