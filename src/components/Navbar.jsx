"use client";

import { useAuth } from "@/lib/AuthContext";
import { logout } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (user) {
      const emailName = user.email.split("@")[0]; // Extract part before '@'

      setUserEmail(emailName);
    } else {
      setUserEmail(null);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

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
          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
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
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          {/* TimeCapsule */}
          <Image
            alt=""
            width={149}
            height={48}
            src="/logo-white.png"
            priority
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {user ? (
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
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="pr-4 capitalize">{userEmail}</p>
            <Link
              href="/sign-up"
              onClick={handleLogout}
              className="btn signUpBtn"
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link href="/sign-in" className="btn signInBtn">
              Sign In
            </Link>
            <Link href="/sign-up" className="btn signUpBtn">
              Sign Up
            </Link>
          </>
        )}

        {/* <Link href="/sign-in" className="btn signInBtn">
          Sign In
        </Link>
        <Link href="/sign-up" className="btn signUpBtn">
          Sign Up
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
