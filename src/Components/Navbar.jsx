import React from "react";
import { FaDumbbell, FaWeight } from "react-icons/fa";
function Navbar() {
  return (
    <div className="text-white pt-2">
      <div className="w-[90%] mx-auto overflow-hidden flex items-center justify-between ">
        <div className="flex items-center gap-10">
          <div>
            <FaDumbbell className="text-6xl text-orange-600" />
          </div>
          <div className="flex gap-10">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Project</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className="flex gap-8">
          <button className="bg-orange-600 px-3 py-1 rounded-lg text-white font-semibold ">
            Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
