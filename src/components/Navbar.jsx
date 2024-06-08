import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
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
              <a>Home</a>
            </li>
            <li>
              <a>Create Capsule</a>
            </li>
            <li>
              <a>My Capsules</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          {/* TimeCapsule */}
          <Image alt="" width={149} height={48} src="/logo-white.png" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-capsule">Create Capsule</Link>
          </li>
          <li>
            <Link href="/capsules">My Capsules</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/sign-in" className="btn signInBtn">
          Sign In
        </Link>
        <Link href="/sign-up" className="btn signUpBtn">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
