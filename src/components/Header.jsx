import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Register from './buttons/Register'




const Header = () => {
  return (
    <header >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active"  to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active"  to="/about">About</NavLink>
                
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand fw-bild mx-auto" to="/">APPLE MARK</NavLink>
          <Login/>
          <Register/>
          <CartBtn/>
          </div>
          
          
          

        </div>
      </nav>
    </header>
  )
}

export default Header