import React from "react";

const Faq = () => {
  return (
    <div className="w-4/5 mx-auto mb-10">
      <h1 className="text-center font-bold text-3xl">FAQ</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/12 items-center mx-auto rounded-full"></div>

      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            What is TimeCapsule?
          </div>
          <div className="collapse-content">
            <p>
              TimeCapsule is a platform that allows users to create and store
              digital capsules containing memories, messages, and files to be
              opened at a future date.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            How does TimeCapsule work?
          </div>
          <div className="collapse-content">
            <p>
              Users can create a capsule, add contents such as photos, videos,
              and text messages, and set an opening date for the capsule. The
              capsule remains sealed until the specified opening date, at which
              point it can be unlocked and its contents revealed.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            What can I include in my TimeCapsule?
          </div>
          <div className="collapse-content">
            <p>
              You can include a variety of digital content in your TimeCapsule,
              including photos, videos, documents, letters, and more. Get
              creative and personalize your capsule with meaningful memories and
              messages.
            </p>
          </div>
        </div>

        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            Is TimeCapsule free to use?
          </div>
          <div className="collapse-content">
            <p>
              Yes, TimeCapsule offers a free basic plan with limited features.
              We also offer premium plans with additional storage space,
              customization options, and advanced features for users who require
              more functionality.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mb-5"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            What is TimeCapsule?
          </div>
          <div className="collapse-content">
            <p>
              TimeCapsule is a platform that allows users to create and store
              digital capsules containing memories, messages, and files to be
              opened at a future date.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Faq;
