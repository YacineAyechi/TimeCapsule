"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosCloseCircle, IoIosCloseCircleOutline } from "react-icons/io";

const CreateCapsule = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log({ title, description, openingDate, category, files });
    }
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-center text-4xl">Create Capsule</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/5 items-center mx-auto rounded-full"></div>

      <div className="flex justify-center items-center mx-auto">
        <form className="capsule-form" onSubmit={handleSubmit}>
          <div className="flex ">
            <div className="w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Capsule Title <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter the title of your capsule"
                className="input input-bordered w-full max-w-xs mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2">{errors.title}</p>
              )}
            </div>

            <div className="ml-[4.5rem] w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Category <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                className="select select-bordered w-full max-w-xs mt-2"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  Select a Category
                </option>
                <option value="personal-memories">Personal Memories</option>
                <option value="events">Events</option>
                <option value="historical-moments">Historical Moments</option>
                <option value="hobbies-interests">Hobbies and Interests</option>
                <option value="work-education">Work and Education</option>
                <option value="future-messages">Future Messages</option>
                <option value="other">Other</option>
              </select>

              {errors.openingDate && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.openingDate}
                </p>
              )}
            </div>

            <div className="ml-[4.5rem] w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">
                Date to Open <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="datetime-local"
                placeholder="Type here"
                id="opening-date"
                className="input input-bordered w-full max-w-xs mt-2 "
                value={openingDate}
                onChange={(e) => setOpeningDate(e.target.value)}
              />
              {errors.openingDate && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.openingDate}
                </p>
              )}
            </div>
          </div>

          <div className="flex mt-4">
            <div className=" w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Photos</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs mt-2"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="ml-[4.5rem] w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Videos</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs mt-2"
                accept="video/*"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="ml-[4.5rem] w-full max-w-xs">
              <label className="text-[#3f51b5] font-bold">Add Audio</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs mt-2"
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

          <div className="mt-4">
            <label className="block text-lg font-semibold text-blue-700">
              Preview
            </label>
            <div className="preview-section">
              {files.map((file, index) => (
                <div key={index} className="relative w-1/6 h-1/6 group">
                  {file.type.startsWith("image") && (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      width={100}
                      height={100}
                      className="w-full h-full group-hover:opacity-50"
                    />
                  )}
                  {file.type.startsWith("video") && (
                    <video
                      controls
                      className="w-full h-full group-hover:opacity-50"
                    >
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </video>
                  )}
                  {file.type.startsWith("audio") && (
                    <audio
                      controls
                      className="w-full h-full group-hover:opacity-50"
                    >
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </audio>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-2 right-2  text-white rounded-full p-2 "
                  >
                    <IoIosCloseCircleOutline className="text-[#3f51b5] w-14 h-14 font-bold" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button type="button" className="btn signUpBtn mt-4 w-1/6">
              Save as Draft
            </button>

            <button type="submit" className="btn signUpBtn ml-2 w-1/6">
              Create Capsule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCapsule;
