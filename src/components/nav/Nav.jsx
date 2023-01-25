import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link } from "react-router-dom";

function Nav() {
    const catagory = [
        {id:1,cat:'catagory'},
        {id:2,cat:'catagory'},
        {id:3,cat:'catagory'},
        {id:4,cat:'catagory'},
        {id:5,cat:'catagory'},
    ]
  return (
    <div>
      <div className="flex justify-between px-3 py-3">
        <div className="flex ">
          <div className="flex">
            <button>
              <SearchIcon style={{ fontSize: "40px" }} />
            </button>
            <button>
              <AccountCircleIcon style={{ fontSize: "40px" }} />
            </button>
          </div>
        </div>
        <input
          type="text"
          className="border border-gray w-[380px] focus:text-rose md:w-[80%] lg:w-[50%] outline-none p-1"
        />
        <div>
          <button className="sm:hidden">
            <LegendToggleIcon style={{ fontSize: "40px" }} />
          </button>
        </div>
      </div>
      <div className="bg-white ">
        <ul className="flex justify-center w-[90%]">
            {catagory.map(list => (
            <Link key={list.id} path={`/${list.cat}`} className="p-2 hover:underline hover:underline-offset-8 text-xl">{list.cat}</Link>
            
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
