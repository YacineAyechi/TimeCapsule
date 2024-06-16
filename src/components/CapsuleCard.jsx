"use client";

import React, { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { MdOutlineDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const CapsuleCard = ({ capsule, onDelete }) => {
  const openingDate = useMemo(() => new Date(capsule.openingDate), []); // Memoize the opening date
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(openingDate - now, 0);

      if (diff === 0) {
        setCountdownFinished(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Initial call to set the countdown immediately

    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [openingDate]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "capsules", capsule.id));
      onDelete(capsule.id); // Notify parent component about deletion
      toast.success("Capsule Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting capsule:", error);
      toast.error("Failed to Delete Capsule. Please Try Again.");
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = `${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`;
    return formattedDate;
  };

  return (
    <div className="bg-white rounded-lg [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px] p-4">
      <Toaster />
      <div className="mb-4">
        <h2 className="text-xl font-semibold capitalize">{capsule.title}</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500">{capsule.category}</span>
        <span className="text-gray-500">{formatDate(capsule.openingDate)}</span>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <div className="flex gap-5">
            <div>
              <span
                className="countdown font-mono text-4xl"
                style={{ "--value": timeRemaining.days }}
              >
                {timeRemaining.days}
              </span>
              days
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": timeRemaining.hours }}></span>
              </span>
              hours
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": timeRemaining.minutes }}></span>
              </span>
              min
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": timeRemaining.seconds }}></span>
              </span>
              sec
            </div>
          </div>
        </div>

        {countdownFinished ? (
          <div className="mt-4 flex items-center justify-center">
            <div className="btn deleteBtn" onClick={handleDelete}>
              <MdOutlineDelete className="text-white text-xl" />
            </div>
            <Link href={`/capsules/${capsule.id}`} className="btn signUpBtn">
              View Details
            </Link>
          </div>
        ) : (
          <div className="mt-4 flex items-center justify-center">
            <div className="btn deleteBtn" onClick={handleDelete}>
              <MdOutlineDelete className="text-white text-xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapsuleCard;
