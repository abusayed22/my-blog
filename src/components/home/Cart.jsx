import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeLoaderCard from "../loader/HomeLoaderCard";
import moment from "moment";

function Cart({ blogs, loading }) {
  if (loading) {
    return (
      <>
        {blogs?.map((s) => (
          <HomeLoaderCard key={s.id} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {blogs?.map((s) => (
          <div
            key={s.id}
            className=" hover:scale-105 transition rounded-lg dark:bg-[#f30b0ba8] bg-[#ec121f]  h-[340px] md:h-[450px] lg:h-[450px] xl:h-[470px] w-[210px] md:w-[360px] xl:w-[380px]  flex flex-col items-center justify-center shadow-down shadow-xl"
          >
            <img
              src={s.thumbnail}
              alt="test"
              className="m-auto p-auto mt-5 w-[200px] md:w-[370px] xl:w-[410px] h-[120px] md:h-[180px] lg:h-[200px] mb-5"
            />
            <div className="flex flex-col space-y-3">
              <b className="p-2 text-clip text-center font-bold md:font-extrabold text-sm md:text-lg xl:text-xl select-text selection:text-green">
                {s.title}
              </b>
              <div className="mx-auto">
                <Link
                  to={`/single/${s.id}`}
                  className="text-sm lg:text-lg  border border-white transition hover:border-[#818cf8]  shadow-sm hover:shadow-[#818cf8] hover:shadow-md px-3 md:px-5 py-1 md:py-2 text-blue rounded-md"
                >
                  View..
                </Link>
              </div>
              <Link
                to={`/profile/${s.email}`}
                className="mx-auto justify-center items-center flex space-x-2 p-2 "
              >
                <Avatar
                  alt={s.author?.name}
                  src={s.link}
                  // sx={{ width: 56, height: 56 }}
                  className="w-[30px] md:w-[55px] md:h-[55px] h-[30px]"
                />
                <div className="space-y-0">
                  <Link
                    to={`/profile/${s?.id}`}
                    className="text-sm md:text-lg  transform hover:underline text-green "
                  >
                    {s?.name}
                  </Link>
                  <p className="m-1 text-[12px] md:text-sm text-white">
                    {moment(s.date).startOf("day").fromNow()}
                  </p>
                  <span className="text-[14px] md:text-lg text-gray">{s.date}</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Cart;
