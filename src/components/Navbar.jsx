import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 
export default function Navbar() {
  return (
    <header>
      <Link to='/' className='logo'>Quizzer</Link>
    <nav>
        <Link to='/'>Browse</Link>
        <Link to='/'>Browse</Link>
        <Link to='/'>Browse</Link>
        <Link to='/'>Browse</Link>
    </nav>
    </header>
  )
}

