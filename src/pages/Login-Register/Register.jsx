import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password, photo);

    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess(
          <p className="text-center">
            "Registration Successful... <br /> Please visit{" "}
            <Link className="btn btn-xs " to="/login">
              Login
            </Link>{" "}
            page... "
          </p>
        );

        updateUserData(result.user, name, photo);
      })
      .catch((error) => {
        console.error(error);

        setError(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* 


             */}

          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                required
                className="input input-bordered"
              />
            </div>

            {/* 



 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                name="photo"
                id="photo"
                required
                className="input input-bordered"
              />
            </div>

            {/* 



 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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

            {/* 


 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                required
                className="input input-bordered"
              />
            </div>

            {/* 






 */}

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  onClick={handleAccepted}
                  name="accept"
                  id="accept"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Accept Term & Conditions </span>
              </label>
            </div>

            {/* 




 */}

            <div className="form-control mt-6">
              {accepted ? (
                <button className="btn btn-primary ">Register</button>
              ) : (
                <button className="btn btn-primary btn-disabled">
                  Register
                </button>
              )}
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="btn btn-xs btn-primary">
                  Login
                </Link>
              </span>
            </p>

            {error && (
              <div className="text-red-600 bg-red-100 text-center rounded-3xl px-2 py-1">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 bg-green-100 rounded-3xl px-2 py-1">
                {success}{" "}
              </div>
            )}
          </form>
          {/* 



 */}
        </div>
      </div>
    </div>
  );
};
export default Register;
