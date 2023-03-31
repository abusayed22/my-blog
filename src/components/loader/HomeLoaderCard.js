import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const HomeLoaderCard = () => {
  return (
    <div className="animate-pulse mt-4 rounded-lg bg-[#f4f7fa] w-[220px] md:w-[380px] space-y-4 h-[300px] md:h-[500px] flex flex-col items-center justify-center shadow-down shadow-xl">
      <div className="animate-pulse w-[180px] md:w-[380px] h-40 md:h-60 mb-5 bg-white rounded-md"></div>
      <div className="flex flex-col space-y-3">
        <b className="text-clip text-center ">
          ..............
        </b>
        
        <div
          className="mx-auto flex flex-col items-center space-x-1 p-2 "
        >
          <Avatar className="animate-pulse" />
          <div className="flex flex-col justify-around">
            <div className="animate-pulse w-40 h-10 rounded-sm bg-white"></div>
            <b className="animate-pulse w-30 h-5 bg-white"></b>
            <b className="animate-pulse w-30 h-2 bg-white"></b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoaderCard;
