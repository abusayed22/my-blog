import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteBlog from "../../redux/allBlog/thunk/PostEdtiDelete/deleteBlog";

function OwnVideos({ author }) {
  const { user, isLoading, isError } = useSelector((state) => state.user);
  const [hoverAction, setHoverAction] = useState(false);
  const authEmail = user?.email;
  const dispatch = useDispatch();

  // ==== delete handler
  const deleteHandle = (deleteId) => {
    dispatch(deleteBlog(deleteId));
  };
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {author?.map((admin) => (
        <div className="relative flex justify-center items-center m-auto shadow-md my-2">
          <Card key={admin.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={admin.thumbnail}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="capitalize"
                >
                  {admin.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden dark:bg-[#161515f5] bg-[#dad2fcc9] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
            <div className="flex justify-center items-center h-full">
              <Link to={`editBlog/${admin.id}`} className="w-10">
                <CreateIcon className="text-2xl text-blue" />
              </Link>
              <Link to={`single_blog/${admin.id}`} className="w-10">
                <PreviewIcon className="text-2xl text-rose" />
              </Link>
              <button onClick={() => deleteHandle(admin.id)} className="w-10">
                <DeleteOutlineIcon className="text-[#ee0505]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OwnVideos;
