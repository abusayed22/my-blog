import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link } from "react-router-dom";
import ModalNav from "../modalComponents/ModalNav";

function Nav({ catagory }) {
  const [toggled, isToggled] = useState(false);

  // nav toggled handler
  const toggledHandler = () => {
    isToggled((prv) => !prv);
  };

  return (
    <div>
      <div className=" flex justify-between px-3 py-3 md:flex-row-reverse">
        <div className="flex">
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
          className="hidden border border-gray w-[380px] focus:text-rose md:w-[80%] lg:w-[50%] outline-none p-1"
        />
        <Link
          to={"/"}
          className="text-3xl font-bold text-red md:ml-[-75%] lg:ml-[-82%] xl:ml-[-84%]"
        >
          myblog
        </Link>
        <div>
          <button onClick={toggledHandler} className="relative md:hidden">
            <LegendToggleIcon style={{ fontSize: "40px" }} />
            <div className="absolute right-0 top-32">
              <ModalNav
                toggled={toggled}
                toggledHandler={toggledHandler}
                catagory={catagory}
              />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-white h-20 invisible md:visible">
        <ul className="flex justify-center w-[90%] items-center h-20">
          {catagory.map((list) => (
            <li key={list.id}>
              <Link
                to={`${list.cat}`}
                className="p-2 hover:underline hover:underline-offset-8 text-xl "
              >
                {list.cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
