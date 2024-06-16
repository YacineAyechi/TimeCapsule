"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const CapsuleDetails = ({ capsuleId }) => {
  const [capsule, setCapsule] = useState(null);

  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const docRef = doc(db, "capsules", capsuleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCapsule({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching capsule:", error);
      }
    };

    fetchCapsule();
  }, [capsuleId]);

  if (!capsule) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-7">
      <h1 className="font-bold text-center text-4xl">Capsule Details</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/6 items-center mx-auto rounded-full"></div>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-xl mb-3">{capsule.title}</h2>
        <p className="text-gray-700">{capsule.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CapsuleDetails;
