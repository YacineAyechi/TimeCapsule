import { FaCapsules } from "react-icons/fa6";
import {
  FaCalendarDays,
  FaShareFromSquare,
  FaHourglassEnd,
  FaBell,
  FaTimeline,
} from "react-icons/fa6";

const Features = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center font-bold text-3xl">Why Choose TimeCapsule</h1>
      <div className="border-2 border-[#3f51b5] mt-3 mb-9 flex justify-center w-1/4 items-center mx-auto rounded-full"></div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-8 items-center justify-center">
          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaCapsules className="text-5xl" />
              <h2 className="card-title">Create Time Capsules</h2>
              <p>
                Easily create digital time capsules filled with messages,
                photos, videos, and more.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaCalendarDays className="text-5xl" />
              <h2 className="card-title">Scheduled Opening</h2>
              <p>
                Set a future date for your time capsules to be unlocked,
                creating a sense of anticipation.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaShareFromSquare className="text-5xl" />
              <h2 className="card-title">Share with Others</h2>
              <p>
                Share your time capsules with friends and family or keep them
                private.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaHourglassEnd className="text-5xl" />
              <h2 className="card-title">Countdown Timer</h2>
              <p>
                Track the remaining time until your capsules open with an
                elegant countdown timer.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaTimeline className="text-5xl" />
              <h2 className="card-title">Interactive Timeline</h2>
              <p>
                Visualize your time capsules on a timeline and see their opening
                dates at a glance.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-[#e3f2fd] text-[#3f51b5]">
            <div className="card-body">
              <FaBell className="text-5xl" />
              <h2 className="card-title">Notifications and Reminders</h2>
              <p>
                Get notified when a time capsule is about to open and get
                reminders for important dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
