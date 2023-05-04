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

    // console.log(name, email, password, photo);

    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess(
          <p className="text-center">
            "Registration Successful... <br /> Please visit{" "}
            <Link
              className="btn btn-sm m3 text-black hover:text-white bg-orange-200 hover:bg-orange-400  border-0 shadow-xl"
              to="/login"
            >
              Login
            </Link>{" "}
            page... "
          </p>
        );

        form.reset();
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
    <div className="bg-orange-200 rounded-3xl my-24">
      <div className="hero-content mx-auto flex-col py-16">
        <div className="text-center my-2">
          <h1 className="text-4xl font-bold font-serif bg-orange-300 rounded-3xl px-6 py-3 shadow-xl ">
            Please Register !!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-orange-50">
          {/* 


             */}

          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Your Name
                </span>
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
                <span className="label-text text-xl font-bold my-1">
                  Photo URL
                </span>
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
                <span className="label-text text-xl font-bold my-1">Email</span>
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
                <span className="label-text text-xl font-bold my-1">
                  Password
                </span>
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
                  className="checkbox checkbox-accent"
                />
                <span className="label-text font-bold my-1">
                  Accept Term & Conditions{" "}
                </span>
              </label>
            </div>

            {/* 




 */}

            <div className="form-control mt-6">
              {accepted ? (
                <button className="btn text-black border-0 shadow-xl hover:text-white normal-case text-xl font-bold  bg-orange-200 hover:bg-orange-400 ">
                  Register
                </button>
              ) : (
                <button className="btn text-black border-0 shadow-xl hover:text-white normal-case text-xl font-bold  bg-orange-200 hover:bg-orange-400 btn-disabled">
                  Register
                </button>
              )}
            </div>

            <p className="text-xl font-bold text-center my-5">
              Already have an account?{" "}
              <span>
                <Link
                  to="/login"
                  className="btn btn-sm my-5 mx-3 text-black hover:text-white bg-orange-200 hover:bg-orange-400  border-0 shadow-xl"
                >
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
