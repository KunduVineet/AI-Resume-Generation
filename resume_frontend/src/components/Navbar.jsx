import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-opacity-20 hover:text-yellow-100 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg text-lg font-semibold">
                        <li><Link to={"/about"} className="hover:bg-opacity-20 py-2 rounded-md transition-all duration-200">About</Link></li>
                        <li><Link to={"/services"} className="hover:bg-opacity-20 py-2 rounded-md transition-all duration-200">Services</Link></li>
                        <li><Link to={"/contact"} className="hover:bg-opacity-20 py-2 rounded-md transition-all duration-200">Contact</Link></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl hover:bg-opacity-20 transition-all duration-200">
                    AI Resume Maker
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li>
                        <Link to={"/about"} className="hover:bg-opacity-20 py-2 px-4 rounded-md transition-all duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/services"} className="hover:bg-opacity-20 py-2 px-4 rounded-md transition-all duration-200">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="hover:bg-opacity-20 py-2 px-4 rounded-md transition-all duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hover:bg-opacity-20 hover:scale-105 transition-all duration-200 border-none">
                    Login
                </a>
            </div>
        </div>
    )
}

export default Navbar