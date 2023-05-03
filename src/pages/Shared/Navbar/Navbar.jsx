import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar bg-orange-400 rounded-3xl my-10">
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#F9A51A] bg-black" : ""
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#F9A51A] bg-black" : ""
              }
              to="/all-recipes"
            >
              Chef Recipes
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#F9A51A] bg-black" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>

            {/* 
            <li>
              <Link to="/all-recipes"> Chef Recipes</Link>
            </li>

            <li>
              <Link to="blog">Blog</Link>
            </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Thai Masala House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link> Home</Link>
          </li>

          <li>
            <Link to="/all-recipes"> Chef Recipes</Link>
          </li>

          <li>
            <Link to="blog">Blog</Link>
          </li> */}

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black" : ""
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black" : ""
            }
            to="/all-recipes"
          >
            Chef Recipes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black" : ""
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F9A51A] bg-black" : ""
          }
          to="/login"
        >
          Login
        </NavLink>
      </div> */}

      <div className="navbar-end">
        {/* {user && (
          <div>
            <img className="w-10 h-10 rounded-full mx-3" src={pro} alt="" />
          </div>
        )} */}

        {user && (
          <div>
            <FaUserCircle className=" text-xl md:text-2xl"></FaUserCircle>
          </div>
        )}

        {user ? (
          <button className="btn btn-xs btn-accent">Logout</button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black" : ""
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
