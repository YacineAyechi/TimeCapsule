// pages/terms.js

import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-8">
        <h1 className="font-bold text-center text-4xl">Terms and Conditions</h1>
        <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/4 items-center mx-auto rounded-full"></div>

        <p className="text-gray-700 mb-6">
          Welcome to TimeCapsule! These terms and conditions outline the rules
          and regulations for the use of our website and services. By accessing
          and using TimeCapsule, you agree to comply with and be bound by these
          terms. If you disagree with any part of these terms, please do not use
          our website.
        </p>

        <h2 className="text-3xl font-semibold text-[#3f51b5] mb-4">
          Definitions
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>&quot;TimeCapsule&quot;</strong>,{" "}
            <strong>&quot;we&quot;</strong>, <strong>&quot;our&quot;</strong>,
            or <strong>&quot;us&quot;</strong> refers to the operators of the
            TimeCapsule web application.
          </li>
          <li>
            <strong>&quot;User&quot;</strong>, <strong>&quot;you&quot;</strong>,
            or <strong>&quot;your&quot;</strong> refers to any individual or
            entity using our services.
          </li>
          <li>
            <strong>&quot;Content&quot;</strong> refers to any text, images,
            videos, or other digital materials that users upload, store, or
            share using TimeCapsule.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-[#3f51b5] mb-4">
          Use of the Service
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Eligibility
        </h3>
        <p className="text-gray-700 mb-6">
          To use TimeCapsule, you must be at least 13 years old. By using our
          services, you represent and warrant that you meet this age
          requirement.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          User Accounts
        </h3>
        <p className="text-gray-700 mb-4">
          <strong>Account Creation:</strong> You may need to create an account
          to access certain features of TimeCapsule. You agree to provide
          accurate and complete information when creating an account and to
          update your information as necessary.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Account Security:</strong> You are responsible for maintaining
          the confidentiality of your account information and for all activities
          that occur under your account. You agree to notify us immediately of
          any unauthorized use of your account.
        </p>

        <h2 className="text-3xl font-semibold text-[#3f51b5] mb-4">Content</h2>
        <p className="text-gray-700 mb-4">
          <strong>Ownership:</strong> You retain ownership of any content you
          upload, store, or share using TimeCapsule. By uploading content, you
          grant TimeCapsule a non-exclusive, worldwide, royalty-free license to
          use, reproduce, modify, and display the content solely for the purpose
          of operating and improving the service.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Prohibited Content:</strong> You agree not to upload, store,
          or share any content that is illegal, harmful, or violates the rights
          of others. TimeCapsule reserves the right to remove any content that
          violates these terms.
        </p>

        <h2 className="text-3xl font-semibold text-[#3f51b5] mb-4">
          Termination
        </h2>
        <p className="text-gray-700 mb-6">
          TimeCapsule reserves the right to suspend or terminate your account
          and access to the service at any time, without notice, for conduct
          that it believes violates these terms or is harmful to other users of
          the service.
        </p>

        <h2 className="text-3xl font-semibold text-[#3f51b5] mb-4">
          Changes to Terms
        </h2>
        <p className="text-gray-700 mb-6">
          TimeCapsule may update these terms from time to time. We will notify
          you of any changes by posting the new terms on our website. You are
          advised to review these terms periodically for any changes.
        </p>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#3f51b5] font-bold text-lg hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
