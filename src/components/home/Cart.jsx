import React from "react";
// import test from "../../assets/images/tecnology.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Cart({ blog = {}}) {
  const { id, thumbnail, title, avatar, author, date } = blog;
  return (
    <>
      <div key={id} className="rounded-lg mt-5 dark:bg-[#f30b0ba8] bg-[#f4f7fa] w-[420px] md:w-[380px] space-y-4 h-[500px] opacity- flex flex-col items-center justify-center shadow-down shadow-xl">
        <img src={thumbnail} alt="test" className="opacity-75 w-[380px] h-60 mb-5" />
        <div className="flex flex-col space-y-3">
          <b className="text-clip p-5 text-center font-extrabold select-text selection:text-green">
            {title}
          </b>
          <div className="mx-auto">
            <Link
              to={`/single/${id}`}
              className="my-6 border border-white transition hover:border-[#818cf8]  shadow-sm hover:shadow-[#818cf8] hover:shadow-md px-5 py-2 text-blue rounded-md"
            >
              View..
            </Link>
          </div>
          <Link to={"/author"} className="mx-auto flex space-x-2 p-2 ">
            <Avatar
              alt="Cindy Baker"
              src={avatar}
              sx={{ width: 56, height: 56 }}
            />
            <div>
              <Link to={"/author"} className="text-lg transform hover:underline text-green">
                {author}
              </Link>
              <p className="text-[13px] text-white">a day ago</p>
              <span className=" text-gray">{date}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
