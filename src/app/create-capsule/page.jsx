"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { storage, db } from "@/lib/firebase"; // assuming you have Firebase initialized
import { ref, uploadBytesResumable } from "firebase/storage"; // Import ref and uploadBytesResumable from Firebase storage
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const CreateCapsule = () => {
  const router = useRouter();
  const { user, loading } = useAuth(); // assuming useAuth() returns user and loading status

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [formDisabled, setFormDisabled] = useState(true); // Add state to disable form
  const [loadingSubmit, setLoadingSubmit] = useState(false); // Add state to manage form submission loading

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!openingDate) newErrors.openingDate = "Opening date is required.";
    if (!category) newErrors.category = "Category is required.";
    if (files.length === 0) newErrors.files = "At least one file is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formDisabled && validateForm()) {
      setLoadingSubmit(true); // Set loading state to true

      try {
        const capsuleRef = await addDoc(collection(db, "capsules"), {
          title,
          description,
          openingDate,
          category,
          createdBy: user.uid, // Assuming user object contains user's UID
          createdAt: new Date(),
        });

        // Upload files to Firebase Storage
        for (const file of files) {
          const fileRef = ref(
            storage,
            `capsule_files/${capsuleRef.id}/${file.name}`
          ); // Create a storage reference
          await uploadBytesResumable(fileRef, file); // Upload file
        }

        toast.success("Capsule Created Successfully!");
        console.log("created");
        router.push("/capsules");
      } catch (error) {
        console.error("Error creating capsule:", error);
        toast.error("Failed to create capsule. Please try again.");
      } finally {
        setLoadingSubmit(false); // Set loading state to false
      }
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      router.push("/sign-in"); // Redirect to login page if user is not authenticated
    } else {
      setFormDisabled(false); // Enable the form once user authentication status is determined
    }
  }, [user, loading, router]);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
      <Toaster />
      <title>TimeCapsule | Create Capsule</title>
      <h1 className="font-bold text-center text-4xl">Create Capsule</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/5 items-center mx-auto rounded-full"></div>
      <div className="md:flex justify-center items-center mx-auto ">
        <form
          className="capsule-form justify-center items-center mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="md:flex">
            <div className="w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Capsule Title <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter the title of your capsule"
                className="input input-bordered w-full md:max-w-xs mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2">{errors.title}</p>
              )}
            </div>

            <div className="md:ml-[4.5rem] w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Category <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                className="select select-bordered w-full md:max-w-xs mt-2"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled defaultValue>
                  Select a Category
                </option>
                <option value="Personal Memories">Personal Memories</option>
                <option value="Events">Events</option>
                <option value="Historical Moments">Historical Moments</option>
                <option value="Hobbies Interests">Hobbies and Interests</option>
                <option value="Work Education">Work and Education</option>
                <option value="Future Messages">Future Messages</option>
                <option value="Other">Other</option>
              </select>

              {errors.openingDate && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.openingDate}
                </p>
              )}
            </div>

            <div className="md:ml-[4.5rem] w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Date to Open <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="datetime-local"
                placeholder="Type here"
                id="opening-date"
                className="input input-bordered w-full md:max-w-xs mt-2 "
                value={openingDate}
                onChange={(e) => setOpeningDate(e.target.value)}
                min={getCurrentDateTime()}
              />
              {errors.openingDate && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.openingDate}
                </p>
              )}
            </div>
          </div>

          <div className="md:flex mt-4">
            <div className=" w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Photos</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full md:max-w-xs mt-2"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="md:ml-[4.5rem] w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Videos</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full md:max-w-xs mt-2"
                accept="video/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="md:ml-[4.5rem] w-full md:max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Audio</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full md:max-w-xs mt-2"
                accept="audio/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>
          </div>
          {errors.files && (
            <p className="text-red-500 text-sm mt-2">{errors.files}</p>
          )}

          <div className="mt-4">
            <label className="text-[#3f51b5] font-bold">
              Description <span className="text-red-500">*</span>
            </label>
            <br />
            <textarea
              className="textarea textarea-bordered h-40 w-full mt-2"
              placeholder="Describe what's inside your capsule"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn signUpBtn mt-2 md:w-1/6"
            disabled={loadingSubmit}
          >
            {loadingSubmit ? "Creating..." : "Create Capsule"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCapsule;
