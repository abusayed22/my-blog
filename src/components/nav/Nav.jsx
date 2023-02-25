import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link, useMatch, useNavigate } from "react-router-dom";
import ModalNav from "../modalComponents/ModalNav";
import InputModal from "../modalComponents/InputModal";
import Taging from "./tags/Taging";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";

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

  const isChecked = useAuthChecked();
  // const match = useMatch();
  const navigate = useNavigate();

  const loginHandlerWithChecked = () => {
    if(isChecked) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }
  return (
    <div>
      <div className="scrollbar-none dark:bg-black bg-yellow flex justify-between px-3 py-3 md:flex-row-reverse">
        <div className="flex">
          <div className="flex">
            <SearchIcon
              onClick={inputToggledHandler}
              toggledHandler={inputToggledHandler}
              className="relative text-green cursor-pointer"
              style={{ fontSize: "40px" }}
            />
            <div className="absolute top-3 left-[20%] md:left-[20%]">
              <InputModal
                inputToggled={inputToggled}
                toggledHandler={inputToggledHandler}
              />
            </div>
            {isChecked ? (<AccountCircleIcon style={{ fontSize: "40px" }} /> ) :
             (<button onClick={loginHandlerWithChecked} className="w-16 h-8 text-center hover:shadow-lg p-1 border-none text-[#f1f5f9] hover:scale-125 ring ring-green hover:bg-red transition rounded-lg">Login</button>)}
               
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
      <div className="bg-green opacity-75 w-[100%] scroll-mt-[-66px] snap-y h-20 invisible md:visible z-20">
        <ul className="flex mx-auto justify-center w-[90%] items-center h-20 md:space-x-0">
          {catagory.map(cat => (
            <li key={cat.id} className=" ">
              <Taging tag={cat.cat} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
