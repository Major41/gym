import React from "react";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import video from "../assets/video.mp4";

function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div id="about" className="bg-[#0e1c22e1] w-full h-full">
      <div className="w-[90%] mx-auto py-20 flex flex-col">
        <h2 className="text text-xl font-bold mb-4">About Us</h2>

        <h2 className="lg:text-5xl text-3xl  font-bold mb-5 text-white">
          YOUR <span className="text">FITNESS</span> JOURNEY STARTS HERE
        </h2>
        <p className="text-[#a1a1a1] mb-10 font-semibold">
          At Lift Gym, we are dedicated to helping you unlock your full
          potential. With <br className="hidden lg:block" /> top-tir equipments, expert trainers, and a
          welcoming community, we provide the <br className="hidden lg:block" /> perfect environment to push
          your limits and achieve your goals{" "}
        </p>

        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 lg:text-5xl text-3xl font-bold text-white">
              12 <FaPlus className="text" />
            </h2>
            <p className="text-white text-xs lg:text-lg font-semibold">
              Years of  Excellence
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 lg:text-5xl text-3xl font-bold text-white">
              27 <FaPlus className="text" />
            </h2>
            <p className="text-white text-xs lg:text-lg font-semibold">Members</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 lg:text-5xl text-3xl font-bold text-white">
              60 <FaPlus className="text" />
            </h2>
            <p className="text-white text-xs lg:text-lg font-semibold">Weekly Classes</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 lg:text-5xl text-3xl font-bold text-white">
              117 <FaPlus className="text" />
            </h2>
            <p className="text-white text-xs lg:text-lg font-semibold">Expert Trainers</p>
          </div>
        </div>
        {/* Video */}
        <div className="relative  h-[500px] flex justify-center items-center">
          <video
            ref={videoRef}
            className="rounded-4xl object-cover w-screen h-full"
            src={video}
            onPause={() => setIsPlaying(false)}
          ></video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute bg-black bg-opacity-60 text-white p-4 rounded-full hover:bg-opacity-80 transition"
            >
              <Play size={40} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
