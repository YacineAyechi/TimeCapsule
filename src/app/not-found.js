import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[56.5vh]">
      <title>TimeCapsule | Not Found</title>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <Link href="/" className="btn signUpBtn">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
