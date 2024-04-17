import React from 'react'
import LOGO from "../asset/logo.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo"> 
        <Link to="/">
        <img src={LOGO} alt="" />
        </Link>
        </div>
        <div className="links"> 
        <Link className='link' to = "/?cat=art">
          <h6>ARTS</h6>
        </Link>
        <Link className='link' to = "/?cat=art">
          <h6>SCIENCE</h6>
        </Link>
        <Link className='link' to = "/?cat=art">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className='link' to = "/?cat=art">
          <h6>CINEMA</h6>
        </Link>
        <Link className='link' to = "/?cat=art">
          <h6>DESIGN</h6>
        </Link>
        <Link className='link' to = "/?cat=art">
          <h6>FOODS</h6>
        </Link>
        <span>{currentUser?.username}</span>
        {currentUser ? <span onClick={logout}>LOGOUT</span> : <Link to="/login" className='link'>Login</Link>}
        <span className='write'>
        <div className="bg-circle"></div>
        <Link to= "/write" className='link'> WRITE</Link>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;