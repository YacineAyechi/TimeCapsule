import React from "react";

const About = () => {
  return (
    <div className="mx-auto p-12">
      <h1 className="text-4xl font-bold mb-2 text-center">About Us</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-[12%] items-center mx-auto rounded-full"></div>

      <p className="text-lg leading-relaxed mb-6">
        Welcome to our website! We are dedicated to helping you create and
        preserve memories through our innovative time capsule platform. Our goal
        is to provide you with a seamless experience to capture important
        moments in your life and share them with loved ones, both now and in the
        future.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        At TimeCapsule, we believe that memories are precious and deserve to be
        cherished. Whether you&apos;re celebrating a milestone, preserving
        memories for future generations, or simply reflecting on the passage of
        time, our platform offers you the tools to create meaningful capsules
        that encapsulate your memories in a unique way.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Explore our website to discover how you can start creating your own time
        capsules today.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        If you have any questions or feedback, please don&apos;t hesitate to{" "}
        <a href="/contact" className="text-[#3f51b5] font-bold hover:underline">
          contact us
        </a>
        . We&apos;d love to hear from you!
      </p>
    </div>
  );
};

export default About;
