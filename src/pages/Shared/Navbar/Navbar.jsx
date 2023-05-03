import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

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
                isActive ? "text-[#F9A51A] bg-black btn" : " btn"
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#F9A51A] bg-black btn" : " btn"
              }
              to="/all-recipes"
            >
              Chef Recipes
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#F9A51A] bg-black btn" : " btn"
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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#f9a51a] bg-black btn"
                : "text-black btn mx-2 bg-[#f9a51a]"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black  btn" : " btn"
            }
            to="/all-recipes"
          >
            Chef Recipes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black btn" : " btn"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {/* {user && (
          <div>
            <img className="w-10 h-10 rounded-full mx-3" src={pro} alt="" />
          </div>
        )} */}

        {user && (
          <div>
            <FaUserCircle className=" text-2xl md:text-4xl"></FaUserCircle>
          </div>
        )}

        {user ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black btn" : " btn"
            }
            to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#F9A51A] bg-black btn" : " btn"
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
