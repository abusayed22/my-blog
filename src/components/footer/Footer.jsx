import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="w-[100%] h-36 bg-gray center">
      <div className="grid grid-cols-4 w-[90%] mx-auto py-5">
        <div>1</div>
        <div>12</div>
        <div className="col-span-2">
          
          ea ipsum blanditiis eveniet voluptatem!
                <div className="grid grid-cols-3 md:grid-cols-6 mt-5 mx-auto">
                <FacebookIcon />
                <TwitterIcon/>
                <YouTubeIcon/>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
