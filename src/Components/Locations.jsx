import React from "react";
import { FaPlus } from "react-icons/fa";
import world from "../images/world.png";
const Locations = () => {
  return (
    <div className="bg-[#13262e] w-full h-full py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="text font-bold mb-4">Our Locations</h2>

        <h2 className=" text-3xl lg:text-5xl font-bold mb-20 text-white">
          OUR GLOBAL PRESENCE:
          <span className="text"> FITNESS </span> CENTERS{" "}
          <br className="hidden lg:block" />
          <span className="text"> AROUND THE WORLD </span>
        </h2>

        <div className="flex md:flex-row items-center lg:gap-10 mb-10 gap-4 ">
          <div className="flex flex-col">
            <p className="flex items-center text-white text-2xl font-bold">
              23 <FaPlus className="text text-sm" />
            </p>{" "}
            <p className="text-white">Countries</p>
          </div>
          <div>
            <p className="text-[#a1a1a1] border-l-2 pl-4 border-[#a1a1a1] lg:text-xl">
              No matter where you are. Our guyms are here to help you reach your
              fitness goals.
              <br className="hidden lg:block" /> With locations across the
              globe, finding a gym near you is easy. Explore our map{" "}
              <br className="hidden lg:block" /> and join our worldwide fitness
              community today.{" "}
            </p>
          </div>
        </div>
        <img src={world} alt="world " className="w-screen" />
      </div>
    </div>
  );
};

export default Locations;
