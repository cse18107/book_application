import React from 'react'
import logo from '../../image/books-stack-of-three (1).png';
import "./NavBar.css";
import { NavLink,Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="navbar-body">
            <div className="navbar-container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-content__logo">
                        <img className="navbar-content__logo-img" src={logo} alt='booksite'/>
                        <h1>BOOKSITE</h1>
                    </Link>
                    <div className="navbar-content__links">
                        <NavLink to="/" activeClassName="active" className="links "><h4>Home</h4></NavLink>
                        <NavLink to="/add-book" activeClassName="active" className="links"><h4>Add Book</h4></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
