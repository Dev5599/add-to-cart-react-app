import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import AiOutlineShoppingCart from 'react-icons/ai'
function Navigation() {
  return (
    <nav className='nav-bar'>
        <div className='nav-title'>
            <h2>Shopping</h2>
        </div>
        <div className='nav-stack'>
            <ul>
                <li>
                    <Link to={'/'}className='link'>Home</Link>
                </li>
                <li>
                    <Link to={'/login'}className='link'>Login</Link>
                </li>
                <li>
                    <Link to={'/cart'}className='link'>
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation