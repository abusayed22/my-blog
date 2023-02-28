import React, { useEffect, useState } from "react";
import Hero from "../../components/home/Hero";
import Cart from "../../components/home/Cart";
import { useDispatch, useSelector } from "react-redux";
import fetchBlog from "../../redux/allBlog/thunk/fetchBlog";
import Paginations from "../../utils/loader/Paginations";
import HomeLoaderCard from "../../components/loader/HomeLoaderCard";
import AccountModal from "../../components/modalComponents/AccountModal";
import LinearIndeterminate from "../../utils/loader/LinearIndeterminate";
import ScroolProgrees from "../../utils/loader/ScroolProgrees";
import TextAnimated from "../../utils/loader/text animation/TextAnimated";
import ScroolingCart from "../../utils/loader/scrolingCart/ScrollingCart";
import { motion } from "framer-motion";
import LikeDislike from "../../components/like/LikeDislike";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import CreateBlogButton from "../../components/home/CreateBlogButton";

function Home() {

  const { blogs, isLoading, isError } = useSelector(state => state.allBlog?.blogs);
  // get from filter state : to fetch get blogs with tags&search filter
  const { tags, search: searched } = useSelector(state => state?.filterBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog({ tags, searched }))

  }, [dispatch, tags, searched]);

  // pagination functional
  // const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);

  const indexOfLastBlog = currentPage * blogPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage
  const currentBlog = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const authChecked= useAuthChecked()
  console.log(authChecked);

  return (<>
    <div className="bg-[#E1D5D9] dark:bg-black scroll-smooth relative z-30">
      {/* <LinearIndeterminate/> */}
      <div className="absolute z-40 right-12 top-[60vh]">
        <CreateBlogButton />
      </div>
      <Hero />
      <TextAnimated />
      <ScroolProgrees />
      <br />
      <p className="text-xl font-extrabold text-green border-b text-center">
        ALL Blogs
      </p>

      <div className="w-[90%] mx-auto">
        <div className="flex flex-shrink flex-wrap justify-evenly snap-start">
          {isLoading ? (<>
            <HomeLoaderCard />
            <HomeLoaderCard />
            <HomeLoaderCard />
          </>) : (
            <>
                <Cart blogs={currentBlog} />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Paginations
          blogPerPage={blogPerPage}
          totalBlogs={blogs?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
            <LikeDislike />
    </div>
  </>
  );
}

export default Home;
