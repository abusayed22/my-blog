import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import OwnVideos from "./OwnVideos";
import PublicVideos from "./PublicVideos";
import authorThunk from "../../redux/authorRelated/authorTHunk/authorThunk";

function Author() {
  const { blog, isLoading, isError } = useSelector(
    (state) => state.allBlog?.blog
  );
  const {
    authorOf,
    isLoading: authLoading,
    isError: authErrr,
  } = useSelector((state) => state.author);
  const {
    user,
    isLoading: userLoaging,
    isError: userError,
  } = useSelector((state) => state.user);

  const [matchAuth, setMatchAuth] = useState(false);
  const authEmail = user?.email;

  const { paraEmail } = useParams();
  const dispatch = useDispatch();

  // === single blog fetching
  // useEffect(() => {
  //   dispatch(singleBlogFetch(id)); // TODO:
  // }, [dispatch, id]);
  const search = useLocation().search
    const searchParams = new URLSearchParams(search)
  console.log(searchParams);

  // === for single data read
  const {
    id: aID,
    title,
    description,
    name,
    email,
    professional,
    proTitle,
    date,
    link,
    thumbnail,
    tags,
    like,
    comments,
  } = blog || {};

  // silent fetching author's data match with user email
  useEffect(() => {
    dispatch(authorThunk(paraEmail));
  }, [dispatch, paraEmail]);

  // own conditon with useEffect
  useEffect(() => {
    if (authEmail !== paraEmail) {
      setMatchAuth(false);
    } else {
      setMatchAuth(true);
    }
  }, [paraEmail, authEmail]);

  return (
    <div className="dark:bg-black">
      <div className=" border-gray bg-white dark:bg-[#53657e] bg w-[] h-[400px] mx-auto shadow-2xl  rounded-3xl p-6 shadow-[#365314]">
        <div className="flex justify-center py-2 bg-green w-[215px] h-[215px] rounded-full mx-auto shadow-deep">
          <Avatar
            alt="Remy Sharp"
            src={link}
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div className="flex flex-col items-center my-3">
          <b className="text-xl">{name} </b>
          <b className="text-lg py-1">{professional} </b>
          <b className="text-lg py-1">{email} </b>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-xl font-extrabold text-green border-b text-center">
          {name}'s Blog
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-5">
        {matchAuth ? <OwnVideos /> : <PublicVideos />}
      </div>
    </div>
  );
}

export default Author;
