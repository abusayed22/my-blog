import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import busness from "../../assets/images/busness.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function PublicVideos({ author }) {
  const { user, isLoading, isError } = useSelector((state) => state.user);
  const [hoverAction, setHoverAction] = useState(false);
  const authEmail = user?.email



  return (
    <div className=" container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
      {author?.map((admin) => (
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
                    {admin.tags.join(" ")}
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
