import React from "react";
import test from "../../../src/assets/images/neture.jpg";
import { Avatar, Pagination, Typography } from "@mui/material";
import Cart from "../../components/home/Cart";

function SingleBlog() {
  return (
    <div className="dark:bg-black">
      <div>
        <img src={test} alt="test" className="w-[100%] h-[60vh]" />
      </div>
      <br />
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-[20%] ">
          <Avatar src="" alt="" />
          <b>Aurthor Name</b>
          <p>propeson</p>
          <p>tittle</p>
        </div>
        <div className="w-[80%] p-5">
          <Typography className="indent-12 selection:text-green first-letter:text-red first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit deserunt saepe tempora a quasi nulla fuga doloribus
            beatae earum incidunt aspernatur porro ullam facilis eum esse
            excepturi, quam cumque doloremque, obcaecati dolore. Accusantium,
            doloribus! Nostrum cumque doloribus, quo quas natus, at animi
            laborum distinctio, rem ipsum delectus voluptate officia minus eum.
            Quisquam pariatur laborum reprehenderit, adipisci vero aliquid
            inventore placeat. Ex facere corporis reiciendis vitae eos. Cum
            ducimus, alias dolorem, facere saepe optio ullam suscipit ad
            delectus distinctio fugiat adipisci.
          </Typography>
        </div>
      </div>
      <br />
      <div>
        <p className="mx-auto text-2xl w-40 border-b-4 dark:text-white">Related Blogs</p>
        <div className="flex flex-wrap justify-center space-x-5">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="flex justify-center mt-10">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
