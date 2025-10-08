import React from "react";
import { Link, NavLink } from "react-router";
import navImage from "../Images/logo.png";
import './Navbar.css';
import { Github } from "lucide-react";

const NavBar = () => {

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/apps`}>Apps</Link>
            </li>
            <li>
              <Link to={`/install`}>Installation</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="flex items-center gap-1">
          <img className="w-10" src={navImage} />
          <h4 className="text-[#632EE3] text-base font-bold">Hero.io</h4>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/apps`}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={`/install`}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href={'https://github.com/Rumon-Ghosh'} target="_black" className="btn bg-gradient-to-bl from-[#9F62F2] to-[#632EE3] text-white">  <Github />Contribute</a>
      </div>
    </div>
  );
};

export default NavBar;
