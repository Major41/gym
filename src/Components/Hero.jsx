import React from "react";
import wall from "../images/waall2.png";
import woman from "../images/woman.jpg";
import woman1 from "../images/gym4-woman.jpg";
import Navbar from "./Navbar";
import { FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";
function Hero() {
  return (
    <div className="w-full h-full hero relative overflow-hidden pb-6">
      <Navbar />
      <div className=" w-[90%] mx-auto flex justify-between">
        <div className="flex flex-col justify-center items-start mt-10">
          <h2 className=" text-5xl md:text-7xl text-center lg:text-left font-extrabold text-[#FFFFFF] mb-10">
            Push Your Limits <br className="hidden lg:block" />
            with Us
          </h2>
          <p className="text-[#FFFFFF] text-lg mb-6 text-center lg:text-left">
            From beginner to advance, experince workouts <br /> designed to help
            you achieve peak performance <br /> and exceed your fitnedd goals.
          </p>
          <div className="flex gap-4 mb-10 mx-auto lg:mx-0">
            <button className="bg-[#FF4F00] px-4 py-2 text-xl text-white hover:bg-white hover:text-[#FF4F00] cursor-pointer    rounded-md">
              Get Started
            </button>
            <button className="bg-[#FFFFFF] text-[#FF4F00] rounded-md flex items-center gap-2 px-4 py-2 hover:shadow-lg shadow-white cursor-pointer">
              <FaPlayCircle className="text-[#FF4F00] text-3xl" />
              <span className="text-[#FF4F00] text-3xl"> Watch Video </span>
            </button>
          </div>
          <div className="mb-6">
            <div className="mt-10">
              <div className="flex items-center  gap-2 mb-10 relative">
                <img
                  src={woman}
                  alt="Nice image"
                  className="w-[60px] h-[60px] object-cover rounded-full absolute"
                />
                <img
                  src={woman1}
                  alt="Nice image"
                  className="w-[60px] h-[60px] object-cover rounded-full absolute left-12"
                />
                <img
                  src={woman}
                  alt="Nice image"
                  className="w-[60px] h-[60px] object-cover rounded-full absolute left-24"
                />
                <FaPlus className="absolute left-42 border border-[#ffffff] w-[60px] h-[60px] p-3 rounded-full flex justify-center items-center text-[#FF4F00] " />
              </div>

              <div className="flex items-center gap-2 mb-2 ">
                <span>
                  <FaStar className="text-[#FF4F00]" />
                </span>
                <span>
                  <FaStar className="text-[#FF4F00]" />
                </span>
                <span>
                  <FaStar className="text-[#FF4F00]" />
                </span>
                <span>
                  <FaStar className="text-[#FF4F00]" />
                </span>
                <span>
                  <FaStar className="text-[#FF4F00]" />
                </span>
              </div>
              <p className="text-white">4.9k reviews</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 mx-auto lg:mx-0  items-center gap-4 mt-10">
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Personal Training
            </p>
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Strength
            </p>
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Group Classes
            </p>
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Swimming
            </p>
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Cardio Equipments
            </p>
            <p className="border border-white py-2 px-4 text-center rounded-2xl text-white font-semibold">
              Functional Workouts
            </p>
          </div>
        </div>
        <div>
          <img
            src={wall}
            alt="wallpaper"
            className="w-[650px] z-[-1] lg:z-[1] -mt-22 absolute right-20 -top-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
