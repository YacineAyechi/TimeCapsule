import CapsuleCard from "@/components/CapsuleCard";
import Head from "next/head";
import React from "react";

const MyCapsules = () => {
  return (
    <div className=" flex flex-col min-h-[100vh]">
      <div className="container mx-auto px-4 pt-7">
        <h1 className="font-bold text-center text-4xl">My Capsules</h1>
        <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/6 items-center mx-auto rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-14 gap-6">
          {/* {capsules.map((capsule) => (
          <CapsuleCard key={capsule.id} capsule={capsule} />
        ))} */}
          <CapsuleCard />
        </div>
      </div>
    </div>
  );
};

export default MyCapsules;
