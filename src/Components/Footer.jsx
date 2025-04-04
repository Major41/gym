import React from "react";
import { FaPhone, FaDumbbell, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2c4955] w-full h-full pt-20">
      <div className="w-[90%] mx-auto ">
        <h2 className="text-3xl lg:text-4xl text-center text-white fonr-bold mb-5 ">
          READY TO GROW?
        </h2>
        <p className="text-center text-white lg:text-lg mt-4 mb-10">
          Take the first step towards a stranger, healthier you by claiming your
          free one-week membership at GROW Gym.{" "}
          <br className="hidden lg:block" /> Experince our state-of-the-art
          facilities, join our energizing classes, and see why GROW is the
          perferct <br className="hidden lg:block" /> place to reach your
          fitness goals{" "}
        </p>
        <button className="flex items-center text-lg justify-center max-w-fit mx-auto gap-2 text-white py-2 px-6 rounded-lg bg-[#ff4f00] transition duration-300">
          Get Free Trial <FaArrowRight className="-rotate-45" />
        </button>

        <div className="flex items-center justify-between my-10">
          <p className="flex items-center gap-2 text-white text-2xl font-bold">
            <FaDumbbell className="text-6xl text-orange-600" />
            Grow
          </p>
          <div className="flex flex-col lg:flex-row gap-10 text-white ">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#projects">Project</a>
          </div>
          <div className="flex gap-4 items-center font-bold text-white rounded-lg bg-[#ff4f00] lg:px-4 lg:py-2 p-2">
            {" "}
            <FaPhone className="" /> +254790809501
          </div>
        </div>
        <p className="text-sm md:text-base py-4 text-center text-[#a1a1a1] font-semibold">
          © {new Date().getFullYear()} Grow. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
