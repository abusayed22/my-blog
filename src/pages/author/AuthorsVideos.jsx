import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import busness from '../../assets/images/busness.jpg'
import { Link } from 'react-router-dom';

 function AuthorsVideos({author}) {

  return (
    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3'>
      {author?.map(admin => (
        <Link className='flex justify-center items-center m-auto shadow-md my-2'>
          <Card key={admin.id} sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={admin.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
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

export default AuthorsVideos;