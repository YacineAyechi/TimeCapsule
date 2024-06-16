"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const CapsuleDetails = ({ params }) => {
  const { id } = params; // Get the capsuleId from the URL query
  const [capsule, setCapsule] = useState(null);
  const [fileURLs, setFileURLs] = useState([]);

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
          const urls = await Promise.all(
            fileList.items.map((item) => getDownloadURL(item))
          );
          setFileURLs(urls);
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
      <h1 className="font-bold text-center text-4xl">Capsule Details</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/6 items-center mx-auto rounded-full"></div>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-xl mb-3">{capsule?.title}</h2>
        <p className="text-gray-700">{capsule?.description}</p>
        <div className="file-list">
          {fileURLs.map((url, index) => (
            <div key={index} className="file-item">
              <img src={url} alt={`File ${index + 1}`} className="mb-3" />
            </div>
          ))}
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CapsuleDetails;
