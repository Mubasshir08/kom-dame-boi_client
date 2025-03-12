import React from 'react'
import ProfileCard from '../shared/card/ProfileCard'
import { Link } from 'react-router-dom'
import MenuBar from '../shared/menu-bar/MenuBar'

const Profile = () => {
    return (
        <div>
            <ProfileCard />

            {/* navigation button */}
            <div className='hidden md:flex justify-center gap-x-3 my-5'>
                <Link to='/reader/post' className='btn btn-soft btn-secondary w-1/7'>Post</Link>
                <Link to='/reader/sell' className='btn btn-soft btn-secondary w-1/7'>Buy</Link>
                <Link to='/reader/buy' className='btn btn-soft btn-secondary w-1/7'>Sell</Link>
            </div>

            {/* menu bar */}
            <MenuBar/>
            <div className="container w-1/2 mx-auto divider"></div>
        </div>
    )
}

export default Profile