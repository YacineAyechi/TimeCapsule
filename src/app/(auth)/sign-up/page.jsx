"use client";

import { signUp } from "@/auth/auth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordErrors = validatePassword(formData.password);
    const newErrors = {};

    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors.join(" ");
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);

    //   if (Object.keys(newErrors).length === 0) {
    //     try {
    //       const response = await axios.post("/api/sign-up", {
    //         username,
    //         email,
    //         password,
    //       });

    //       if (response.data.success) {
    //         // Redirect or show success message
    //         console.log("Signup successful!");
    //       } else {
    //         setErrors(response.data.message);
    //       }
    //     } catch (error) {
    //       console.error("Error signing up:", error);
    //       setErrors("An error occurred while signing up.");
    //     }
    //   }
    // };

    if (Object.keys(newErrors).length === 0) {
      try {
        const { user, error } = await signUp(
          formData.email,
          formData.password,
          formData.username
        );

        if (error) {
          throw error;
        }

        // Redirect or show success message
        router.push("/dashboard");
      } catch (error) {
        console.error("Error signing up:", error);
        setErrors({ signUpError: "An error occurred while signing up." });
      }
    }
  };
  return (
    <div className="my-14">
      <h1 className="font-bold text-center text-4xl">Sign Up</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/12 items-center mx-auto rounded-full"></div>
      <div className="flex justify-center items-center mx-auto">
        <form className="" onSubmit={handleSubmit}>
          <div className="w-full max-w-xs">
            <div>
              <label className="text-[#3f51b5] font-bold">
                Username <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your Username"
                className="input input-bordered w-full max-w-xs mt-2"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-5">
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
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>

            <div className="mt-5">
              <label className="text-[#3f51b5] font-bold">
                Password Confirmation <span className="text-red-500">*</span>
              </label>
              <div className="input input-bordered flex items-center gap-2 mt-2">
                <input
                  type={showPasswordConfirmation ? "text" : "password"}
                  className="grow"
                  placeholder="Enter your Password Again"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <div
                  onClick={() =>
                    setShowPasswordConfirmation(!showPasswordConfirmation)
                  }
                  className="cursor-pointer"
                >
                  {showPasswordConfirmation ? (
                    <FaEyeSlash className="w-4 h-4 opacity-70" />
                  ) : (
                    <FaEye className="w-4 h-4 opacity-70" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="mt-2">
              <label className="label cursor-pointer justify-normal">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span className="label-text font-bold ml-2">
                  I agree to the{" "}
                  <Link href="#" className="text-[#3f51b5]">
                    Terms and Conditions
                  </Link>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.termsAccepted}
                </p>
              )}
            </div>

            <button type="submit" className="btn signUpBtn mt-4 w-full">
              Sign Up
            </button>

            <div className="flex mt-2">
              <p>Already have an account?</p>
              <Link
                href="/sign-in"
                className="font-bold text-[#3f51b5] ml-1 hover:text-[#5c6bc0]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
