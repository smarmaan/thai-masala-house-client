import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";

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
    <div className="bg-orange-200 rounded-3xl my-24">
      {/* min-h-screen  */}
      <div className="hero-content mx-auto flex-col py-16">
        <div className="text-center my-2">
          <h1 className="text-4xl font-bold font-serif bg-orange-300 rounded-3xl px-6 py-3 shadow-xl ">
            Please Login !!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-50">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Email address
                </span>
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
                <span className="label-text text-xl font-bold my-1">
                  Password
                </span>
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
                  <div className="flex font-bold items-center gap-2 justify-end cursor-pointer">
                    <FaEye></FaEye>
                    Show Password
                  </div>
                ) : (
                  <div className="flex font-bold items-center gap-2 justify-end cursor-pointer">
                    <FaEyeSlash />
                    Hide Password
                  </div>
                )}
              </div>
              <label className="label">
                <Link
                  to=""
                  className="label-text-alt link link-hover text-xl font-bold my-1"
                >
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
              <button className="btn text-black border-0 shadow-xl hover:text-white normal-case text-xl font-bold  bg-orange-200 hover:bg-orange-400 ">
                Login
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 my-5">
              <div className="form-control">
                <Link
                  onClick={handleGoogleSignIn}
                  className="btn btn-sm bg-orange-200 hover:bg-orange-400 border-0 shadow-xl"
                  to="/"
                >
                  <img className="w-5" src={google} alt="" />
                </Link>
              </div>
              <div className="form-control">
                <Link
                  onClick={handleGitHubSignIn}
                  className="btn btn-sm  bg-orange-200 hover:bg-orange-400 border-0 shadow-xl"
                  to="/"
                >
                  <img
                    className="w-5 bg-white rounded-full"
                    src={github}
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>

            <p className="text-xl font-bold text-center">
              New to this website..? <br /> Please{" "}
              <span className="">
                <Link
                  to="/register"
                  className="btn btn-sm my-5 mx-3 text-black hover:text-white bg-orange-200 hover:bg-orange-400  border-0 shadow-xl"
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
