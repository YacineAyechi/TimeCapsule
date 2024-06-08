import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <Image
          src="./imageHero.svg"
          alt=""
          width={448}
          height={448}
          className="max-w-md"
        />
        <div className="w-10/12">
          <h1 className="text-5xl font-bold">
            Journey Through Time. Create Your Time Capsule Today.
          </h1>
          <p className="py-8 w-2/3">
            Create digital time capsules filled with memories, messages, and
            milestones. Schedule them to unlock at the perfect moment.
          </p>
          <button className="btn getStartedBtn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
