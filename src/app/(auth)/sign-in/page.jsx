"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the data
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="my-14">
      <h1 className="font-bold text-center text-4xl">Sign In</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/12 items-center mx-auto rounded-full"></div>
      <div className="flex justify-center items-center mx-auto">
        <form className="" onSubmit={handleSubmit}>
          <div className="w-full max-w-xs">
            <div>
              <label className="text-[#3f51b5] font-bold">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full max-w-xs mt-2"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-5">
              <label className="text-[#3f51b5] font-bold">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="input input-bordered flex items-center gap-2 mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Enter your Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4 opacity-70" />
                  ) : (
                    <FaEye className="w-4 h-4 opacity-70" />
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className="btn signUpBtn mt-4 w-full">
              Sign In
            </button>

            <div className="flex mt-2">
              <p>Don&apos;t have an account?</p>
              <Link
                href="/sign-up"
                className="font-bold text-[#3f51b5] ml-1 hover:text-[#5c6bc0]"
              >
                Sign Up
              </Link>
            </div>

            {/* {errors.title && (
        <p className="text-red-500 text-sm mt-2">{errors.title}</p>
      )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
