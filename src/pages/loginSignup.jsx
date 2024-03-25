import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <div className="hero min-h-screen bg-[url('https://images.pexels.com/photos/3355400/pexels-photo-3355400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        {/* opacity */}
        <div className="hero min-h-screen bg-black opacity-50"></div>

        {/* content */}
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* card */}
          <div className="card shrink-0 w-full max-w-lg shadow-xl shadow-stone-800 backdrop-blur-md mr-20 hover:shadow-lg hover:shadow-stone-950">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <p className="font-light font-PTSerif text-gray-400 text-center">
                --Log in with Google--
              </p>

              <div className="flex justify-center">
                <div className=" btn btn-ghost btn-circle avatar">
                  <div
                    className="w-10 rounded-full "
                    onClick={signInWithGoogle}
                  >
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                  </div>
                </div>
              </div>

              {/* Register */}
              <div className="text-center">
                Not a member yet?{" "}
                <Link to="/register" className="text-red-400">
                  Register Now!
                </Link>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
