import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authorThunk from "../../redux/authorRelated/authorTHunk/authorThunk";

function PublicVideos() {
  const {
    blog,
    isLoading: blogLoading,
    isError: blogErr,
  } = useSelector((state) => state.allBlog?.blog);
  const {
    authorOf,
    isLoading: authLoading,
    isError: authErrr,
  } = useSelector((state) => state.author);

  const dispatch = useDispatch();

  // ====== fetching author data
  useEffect(() => {
    dispatch(authorThunk(blog?.email));
  }, [dispatch, blog]);

  return (
    <div className=" flex flex-wrap">
      {authorOf?.map((admin) => (
        <Link
          to={`/single/${admin?.id}`}
          className="flex justify-center items-center m-auto shadow-md my-2"
        >
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
                  {admin.tags}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {admin.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default PublicVideos;
