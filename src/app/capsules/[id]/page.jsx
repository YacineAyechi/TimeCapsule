"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

const CapsuleDetails = ({ params }) => {
  const { id } = params; // Get the capsuleId from the URL query
  const [capsule, setCapsule] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchCapsule = async () => {
      if (!id) return; // Ensure capsuleId is available

      try {
        const docRef = doc(db, "capsules", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const capsuleData = { id: docSnap.id, ...docSnap.data() };
          setCapsule(capsuleData);

          // List all files in the specified directory
          const folderRef = ref(storage, `capsule_files/${capsuleData.id}`);
          const fileList = await listAll(folderRef);
          const filePromises = fileList.items.map(async (item) => {
            const metadata = await getMetadata(item);
            const downloadUrl = await getDownloadURL(item);
            return { url: downloadUrl, type: metadata.contentType };
          });
          const fileData = await Promise.all(filePromises);
          setFiles(fileData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching capsule:", error);
      }
    };

    fetchCapsule();
  }, [id]);

  return (
    <div className="container mx-auto px-4 pt-7">
      <title>TimeCapsule | Capsule Details</title>
      <h1 className="font-bold text-center text-4xl">Capsule Details</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/6 items-center mx-auto rounded-full"></div>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-xl mb-3 capitalize ">{capsule?.title}</h2>
        <p className="text-gray-700 capitalize">{capsule?.description}</p>
        <div className="file-list mt-3 mb-8">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              {file.type.startsWith("image") && (
                <img
                  src={file.url}
                  alt={`Image ${index + 1}`}
                  className="mb-3"
                />
              )}
              {file.type.startsWith("video") && (
                <video controls className="mb-3">
                  <source src={file.url} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
              {file.type.startsWith("audio") && (
                <audio controls className="mb-3">
                  <source src={file.url} type={file.type} />
                  Your browser does not support the audio tag.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapsuleDetails;
