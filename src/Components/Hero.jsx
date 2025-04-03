import React from "react";
import wall from "../images/gym-wall.png";
import Navbar from "./Navbar";
function Hero() {
  return (
      <div className="w-full h-full hero ">
          <Navbar/>
      <div className="flex justify-between">
        <div>Contents</div>
        <div>
          <img src={wall} alt="wallpaper" className="w-[700px] -mt-22"  />
        </div>
      </div>
    </div>
  );
}

export default Hero;
