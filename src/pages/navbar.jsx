import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const signoutWithGoogle = async () => {
    const result = await signOut(auth);
    console.log(result);
    navigate("/signup");
  };

  return (
    <>
      <div className="navbar flex-no-wrap fixed top-0 flex bg-black opacity-75 z-40">
        <div className="navbar-start ">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Up Coming Performance</a>
              </li>
            </ul>
          </div> */}
          <Link to="/">
            <a className="btn btn-ghost text-xl">TipsyPeeps</a>
          </Link>
        </div>

        {/* middle link */}

        <div className="navbar-center  lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/signup">
                <a>Join US</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* avatar icon */}

        <div className="flex navbar-end dropdown justify-item-end px-8">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {!user ? (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL || ""}
                />
              )}
            </div>
          </div>

          {/* sign in n logout */}
          <ul
            tabIndex={0}
            className="mt-36 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {!user ? (
              <li>
                <a onClick={signInWithGoogle}>Log In</a>
              </li>
            ) : (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={signoutWithGoogle}>Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
