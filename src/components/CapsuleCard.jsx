"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CapsuleCard() {
  const openingDate = new Date("2025-06-06T12:57:00"); // Hardcoded opening date for testing
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const now = new Date();
    const diff = Math.max(openingDate - now, 0);

    if (diff === 0) {
      setCountdownFinished(true);
    }

    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = Math.max(openingDate - now, 0);

      if (diff === 0) {
        setCountdownFinished(true);
        clearInterval(intervalId);
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [openingDate]);

  return (
    <div className="bg-white rounded-lg [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px] p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Memories With Ghofrane date 6th june 2024
        </h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500">Personal</span>
        <span className="text-gray-500">6th June 2025</span>
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

            {/* <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": timeRemaining.days }}></span>
              </span>
              days
            </div> */}
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

        {/* <Link href={`/capsules/${id}`}>
          <a className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-70 transition duration-300">
            View Details
          </a>
        </Link> */}

        {countdownFinished && (
          <div className="mt-4 flex items-center justify-center">
            <Link href="/" className="btn signUpBtn">
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
