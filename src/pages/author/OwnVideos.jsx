import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import busness from "../../assets/images/busness.jpg";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import deleteBlog from "../../redux/allBlog/thunk/PostEdtiDelete/deleteBlog";
import EditPostAuthor from "./EditPostAuthor";

function OwnVideos({ author }) {
  const { user, isLoading, isError } = useSelector((state) => state.user);
  const [hoverAction, setHoverAction] = useState(false);
  const authEmail = user?.email
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const deleteHandle = (deleteId) => {
    dispatch(deleteBlog(deleteId))
  }
  const editHandle = () => {
    // setEditComponent(true);
  }
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {author?.map((admin) => (
        // <div className="relative">
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
                  <Typography variant="body2" color="text.secondary" >
                    <div >
                    {admin.tags.map(tag => (
                      <p className="bg-[#df32327e] p-1">{tag}</p>
                    ))}
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden dark:bg-[#161515f5] bg-[#aca5a57a] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
              <div className="flex justify-center items-center h-full">
                <Link to={`editBlog/${admin.id}`} className="w-10">
                  <CreateIcon className="text-2xl text-blue" />
                </Link>
                <button onClick={() => deleteHandle(admin.id)} className="w-10">
                <DeleteOutlineIcon  className="text-[#ee0505]" />
                </button>
              </div>
            </div>
        </div>
        // </div>
      ))}

    </div>
  );
}

export default OwnVideos;
