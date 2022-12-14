import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import logo from "../../default.png"

const Navbar = () => {
  const [theme, setTheme] = useState(false)
  
  const { user, logOut } = useContext(AuthContext)
  // console.log(user.email);

  const themeHandler = () => {
    setTheme(dark => !dark)
    console.log(theme);
  }

  return (
    <div className="navbar bg-orange-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home"> Home</Link>
            </li>
            <li>
              <Link to="/courseindex">Courses</Link>
            </li>
            {/* <li tabIndex={0}>
              <a className="justify-between">
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <img className="w-8" src={logo} alt="" />
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-4xl font-bold"
        >
          Hello Learner
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/courseindex">Courses</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user?.uid ? (
          <>
            <div
              data-tip={user?.displayName}
              className="w-16 tooltip tooltip-left rounded-full"
            >
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="DP" />
              ) : (
                <FaUserCircle />
              )}
            </div>
            <button onClick={logOut} className="btn btn-outline">
              <FaSignOutAlt></FaSignOutAlt>
              <span className="ml-2">Sign out</span>{" "}
            </button>
          </>
        ) : (
          <>
            <div className="text-white mx-5">
              <span>{user?.email}</span>
            </div>
            <Link to="/register" className="btn">
              Get started
            </Link>
          </>
        )}
      </div>
      <div onClick={themeHandler} className="form-control mt-1 ml-5">
        {theme ? <p className="ms-1">Dark</p> : <p>Light</p>}
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Navbar;
