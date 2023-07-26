import React from 'react'
import './style.css'

export const Navbar = () => {
  return (
    <div className='flex-container navbar'>
        <div className='flex-item flex-item-50 logo'>
            <p>Logo</p>
        </div>
        <div className='flex-container flex-item flex-item-50'>
            <div className='flex-item flex-item-333'>Logout</div>
            <div className='flex-item flex-item-333'>Wish List</div>
            <div className='flex-item flex-item-333'>Shopping Bag</div>
        </div>
    </div>
  )
}

export default Navbar
