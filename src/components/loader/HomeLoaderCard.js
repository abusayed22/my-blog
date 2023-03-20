import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const HomeLoaderCard = () => {
  return (
    <div className="animate-pulse rounded-lg mt-5 dark:bg-[#f30b0ba8] bg-[#f4f7fa] w-[420px] md:w-[380px] space-y-4 h-[500px] opacity- flex flex-col items-center justify-center shadow-down shadow-xl">
      <div className="animate-pulse w-[380px] h-60 mb-5 border border-black bg-black"></div>
      <div className="flex flex-col space-y-3">
        <b className="text-clip p-5 text-center font-extrabold select-text selection:text-green">
          ..............
        </b>
        <div className="mx-auto">
          {/* <img className="animate-pulse h-8 w-8 bg-red" src={loading} alt="" /> */}
        </div>
        <Link
          to={"/author"}
          className="mx-auto flex items-center space-x-2 p-2 "
        >
          <Avatar className="animate-pulse" sx={{ width: 56, height: 56 }} />
          <div>
            <div className="animate-pulse w-40 h-10 mb-5 border border-black bg-[#1e293b]"></div>
            <p className="animate-pulse w-30 h-5 bg-black"></p>
            <p className="animate-pulse mt-2 w-30 h-2 bg-black"></p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeLoaderCard;
