import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import google from "../../../public/search.png";

import github from "../../../public/github.png";

const Login = () => {
  const { signIn, user, handleGoogleSignIn, handleGitHubSignIn } =
    useContext(AuthContext);

  const [passwordType, setPasswordType] = useState("password");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    setError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        setSuccess("Login Successful");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        
        return;
      });
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  console.log(user);

  console.log(error);
  // console.log(success);
  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl my-6">
      {/* min-h-screen  */}
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordType}
                placeholder="Enter your password"
                name="password"
                id="password"
                required
                className="input input-bordered"
              />
              <div className="my-2" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <div className="flex items-center gap-2 justify-end cursor-pointer">
                    <FaEye></FaEye>
                    Show PassWord
                  </div>
                ) : (
                  <div className="flex items-center gap-2 justify-end cursor-pointer">
                    <FaEyeSlash />
                    Hide PassWord
                  </div>
                )}
              </div>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {/* <div className="form-control">
              <button className="btn btn-sm btn-primary">Login</button>
            </div>
            <div className="form-control">
              <button className="btn btn-sm btn-primary">Google</button>
            </div>
            <div className="form-control">
              <button className="btn btn-sm btn-primary">Github</button>
            </div> */}

            <div className="form-control">
              <button className="btn btn-sm text-black hover:text-white bg-orange-200 hover:bg-orange-400 ">
                Login
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 my-3">
              <div className="form-control">
                <Link
                  onClick={handleGoogleSignIn}
                  className="btn btn-sm bg-orange-200 hover:bg-orange-400 "
                >
                  <img className="w-5" src={google} alt="" />
                </Link>
              </div>
              <div className="form-control">
                <Link
                  onClick={handleGitHubSignIn}
                  className="btn btn-sm  bg-orange-200 hover:bg-orange-400"
                >
                  <img
                    className="w-5 bg-white rounded-full"
                    src={github}
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>

            <p>
              New to EMA-JHON?{" "}
              <span>
                <Link
                  to="/register"
                  className="btn btn-xs  text-black hover:text-white bg-orange-200 hover:bg-orange-400 "
                >
                  Register
                </Link>
              </span>
            </p>

            {error && (
              <div className="text-red-600 bg-red-100 rounded-3xl px-2 py-1">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 bg-green-100 rounded-3xl px-2 py-1">
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
