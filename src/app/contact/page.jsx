"use client";

import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }
    setLoadingSubmit(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message!");
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="p-5">
      <Toaster />
      <h1 className="font-bold text-center text-4xl">Contact Us</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/5 items-center mx-auto rounded-full"></div>

      <div className="flex justify-center items-center">
        <form className="capsule-form w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="w-full max-w-2xl">
            <label className="text-[#3f51b5] font-bold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="input input-bordered w-full max-w-2xl mt-2"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full max-w-2xl mt-4">
            <label className="text-[#3f51b5] font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered w-full max-w-2xl mt-2"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="text-[#3f51b5] font-bold">
              Message <span className="text-red-500">*</span>
            </label>
            <br />
            <textarea
              className="textarea textarea-bordered h-40 w-full max-w-2xl mt-2"
              placeholder="Enter your Message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn signUpBtn mt-4 mb-2 w-1/2 flex justify-center items-center mx-auto"
            disabled={loadingSubmit}
          >
            {loadingSubmit ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
