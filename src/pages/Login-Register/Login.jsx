import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // setError("");
    // setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });

        // setSuccess("Login Successful");
      })
      .catch((error) => {
        console.error(error);
        // setError(error.message);
      });
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
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
              <button className="my-2 bg-red-200" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <div className="flex items-center gap-2 justify-end">
                    <FaEye></FaEye>Show PassWord{" "}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 justify-end">
                    <FaEyeSlash /> Hide PassWord{" "}
                  </div>
                )}
              </button>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <p>
              New to EMA-JHON?{" "}
              <span>
                <Link to="/register" className="btn btn-xs btn-primary">
                  Register
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
