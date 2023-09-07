import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css'
 
export default function Navbar() {
  return (
    <header>
      <Link to='/' className='logo'>Quizzer</Link>
    <nav>
        <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
    </nav>
    </header>
  )
}

