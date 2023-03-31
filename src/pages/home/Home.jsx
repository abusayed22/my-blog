import React, { useEffect, useState } from "react";
import Hero from "../../components/home/Hero";
import Cart from "../../components/home/Cart";
import { useDispatch, useSelector } from "react-redux";
import fetchBlog from "../../redux/allBlog/thunk/fetchBlog";
import Paginations from "../../utils/loader/Paginations";
import HomeLoaderCard from "../../components/loader/HomeLoaderCard";
import ScroolProgrees from "../../utils/loader/ScroolProgrees";
import TextAnimated from "../../utils/loader/text animation/TextAnimated";
import CreateBlogButton from "../../components/home/CreateBlogButton";

function Home() {

  const { blogs, isLoading, isError } = useSelector(state => state.allBlog?.blogs);  //get all blogs
  const { tags, search: searched } = useSelector(state => state?.filterBlog);  // get filter & search value
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchBlog({ tags, searched }))

  }, [dispatch, tags, searched]);

  // ===== pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(6);
  const indexOfLastBlog = currentPage * blogPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage
  const currentBlog = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  // ===== pagination Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (<>
    <div className="bg-[#E1D5D9] dark:bg-black scroll-smooth relative ">
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
        <>
          {
            !isLoading ? (
              <div className="flex flex-wrap flex-shrink space-y-auto justify-evenly snap-start space-x-1  md:space-x-3">
                <Cart blogs={currentBlog} />
              </div>
            ) :
              (<div className="flex flex-wrap flex-shrink space-y-auto justify-evenly snap-start space-x-1  md:space-x-3">
                <HomeLoaderCard />
                <HomeLoaderCard />
                <HomeLoaderCard />
              </div>)
          }
        </>
      </div>
      <div className="flex justify-center mt-5">
        {isLoading ? null : (
          <Paginations
            blogPerPage={blogPerPage}
            totalBlogs={blogs?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  </>
  );
}

export default Home;
