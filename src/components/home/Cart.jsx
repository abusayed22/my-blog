import React from "react";
import test from "../../assets/images/tecnology.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="rounded-lg mt-5 dark:bg-[#f30b0ba8] bg-[#f4f7fa] w-[420px] space-y-4 h-[500px] opacity- flex flex-col items-center justify-center shadow-down shadow-xl">
        <img src={test} alt="test" className="opacity-75 w-[380px] h-60 " />
        <div className="flex flex-col space-y-3">
          <b className="text-clip text-center font-extrabold select-text selection:text-green">
            The application of scientific knowledge for practical purposes,
            especially in industry. "advances in computer technology"
          </b>
          <div className="mx-auto">
            <Link
              to={"/single"}
              className="border border-white transition hover:border-[#818cf8]  shadow-sm hover:shadow-[#818cf8] hover:shadow-md px-5 py-2 text-blue rounded-md"
            >
              View..
            </Link>
          </div>
          <Link to={"/author"} className="mx-auto flex space-x-2">
            <Avatar
              alt="Cindy Baker"
              src={test}
              sx={{ width: 56, height: 56 }}
            />
            <div>
              <Link to={"/author"} className="text-lg border-b-2">
                Author Name
              </Link>
              <p className="text-sm text-gray">a day ago</p>
              <span className=" text-gray">1/30/2023</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
