import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // const { displayName, photoURL } = user;

  const displayName = user?.displayName;
  const photoURL = user?.photoURL;

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log(displayName, photoURL);

  return (
    <div className={`navbar bg-orange-200 rounded-3xl my-10`}>
      <div className="navbar-start">
        <div className="dropdown ">
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
            className="menu menu-compact dropdown-content m-3 p-2 gap-3 shadow bg-orange-200 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0"
                  : "btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0"
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                  : "btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0"
              }
              to="/all-recipes"
            >
              Chef Recipes
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                  : "btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <p className="btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0 text-xl">
          Thai Masala House
        </p>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                : "btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                : "btn text-white font-bold  bg-[#f58d17bb]  hover:bg-[#bd6507] border-0"
            }
            to="/all-recipes"
          >
            Chef Recipes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                : "btn text-white font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {user?.photoURL && (
          <div>
            <img
              className="w-10 h-10 rounded-full mx-3"
              src={photoURL}
              alt=""
              id="userPro"
            />
          </div>
        )}

        <ReactTooltip
          anchorId="userPro"
          place="bottom"
          variant="success"
          content={displayName}
          className="font-bold text-black"
          style={{
            fontWeight: "bold",
            borderRadius: "10px",
            fontSize: "18px",
            backgroundColor: "#f5b04c",
            padding: "7px",
          }}
        />

        {user ? (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn text-white font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0"
                : "btn text-white font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0"
            }
            to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn text-[#F9A51A] font-bold bg-[#b62727d7] hover:bg-[#990e0e] border-0 "
                : "btn text-white font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0"
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
