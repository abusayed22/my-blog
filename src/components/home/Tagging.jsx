import { blue, green, lightGreen } from "@mui/material/colors";
import React from "react";
import bus_img from "../../assets/images/busness.jpg"

function Tagging() {
  //TODO:
  const tags = [];

  return (
    <div className="mt-5 w-[90%] mx-auto">
      <ul className=" mt-5 flex flex-wrap justify-around">
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">Technology</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
        <li className="w-40 py-4 text-lg text-center border border-gray border-double rounded-md">All</li>
      </ul>
    </div>
  );
}

export default Tagging;
