"use client";

import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CapsuleCard from "@/components/CapsuleCard";
import { useAuth } from "@/lib/AuthContext";
import Link from "next/link";

const MyCapsules = ({ capsules }) => {
  const { user, loading } = useAuth();
  const [userCapsules, setUserCapsules] = useState([]);

  useEffect(() => {
    const fetchUserCapsules = async () => {
      if (!user) return;

      const q = query(
        collection(db, "capsules"),
        where("createdBy", "==", user.uid)
      );

      try {
        const querySnapshot = await getDocs(q);
        const capsulesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserCapsules(capsulesData);
      } catch (error) {
        console.error("Error fetching user capsules:", error);
      }
    };

    fetchUserCapsules();
  }, [user]);

  const handleDelete = (deletedId) => {
    setUserCapsules((prevCapsules) =>
      prevCapsules.filter((capsule) => capsule.id !== deletedId)
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-[56.5vh]">
      <div className="container mx-auto px-4 pt-7">
        <h1 className="font-bold text-center text-4xl">My Capsules</h1>
        <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/6 items-center mx-auto rounded-full"></div>
        {userCapsules.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="flex mx-auto text-lg text-gray-600 mb-4">
              You have no capsules yet.
            </p>
            <p className="flex mx-auto text-lg text-center justify-center items-center text-gray-600 mb-4">
              Start by creating a new time capsule to capture your memories.
            </p>
            <Link href="/create-capsule" className="btn signUpBtn mt-4 mb-2">
              Create New Capsule
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-14 gap-6">
            {userCapsules.map((capsule) => (
              <CapsuleCard
                key={capsule.id}
                capsule={capsule}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCapsules;
