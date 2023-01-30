import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link } from "react-router-dom";
import ModalNav from "../modalComponents/ModalNav";
import InputModal from "../modalComponents/InputModal";

function Nav({ catagory }) {
  const [toggled, setToggled] = useState(false);
  const [inputToggled, setInputToggled] = useState(false);

  // nav toggled handler
  const toggledHandler = () => {
    setToggled((prv) => !prv);
  };
  // input toggled handler
  const inputToggledHandler = () => {
    setInputToggled((prv) => !prv);
  };

  return (
    <div>
      <div className="dark:bg-black flex justify-between px-3 py-3 md:flex-row-reverse">
        <div className="flex">
          <div className="flex">
            <SearchIcon
              onClick={inputToggledHandler}
              toggledHandler={inputToggledHandler}
              className="relative dark:text-white"
              style={{ fontSize: "40px" }}
            />
            <div className="absolute top-3 left-[20%] md:left-[20%]">
              <InputModal
                inputToggled={inputToggled}
                toggledHandler={inputToggledHandler}
              />
            </div>

            <button className="dark:text-white">
              <AccountCircleIcon style={{ fontSize: "40px" }} />
            </button>
          </div>
        </div>

        <Link
          to={"/"}
          className="text-3xl font-bold text-red md:ml-[-75%] lg:ml-[-82%] xl:ml-[-84%]"
        >
          myblog
        </Link>

        {/* toggled */}
        <div>
          <button
            onClick={toggledHandler}
            className="relative md:hidden transition-transform z-10 dark:text-gray"
          >
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
      <div className="bg-white h-20 invisible md:visible z-20">
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
