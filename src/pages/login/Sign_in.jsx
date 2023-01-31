import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

function Sign_in() {
  return (
    <div className="dark:bg-black py-5">
      <div className=" shadow-deep flex flex-col space-y-5 p-5 w-[450px] h-[70vh] border border-gray dark:bg-[#64748b] bg-white rounded-md mx-auto">
        <p className="text-2xl text-center font-bold">sign-in</p>
        <div>
          <span className="after:content-['*']">Email</span>
          <input
            className="h-12 rounded-md outline-none w-[400px] text-gray px-2"
            placeholder=" example@gmail.com"
            type="email"
          />
        </div>
        <div>
          <span className="after:content-['*']">Password</span>
          <input
            className="h-12 rounded-md outline-none w-[400px] text-gray px-2"
            type="email"
            placeholder="Password"
          />
        </div>
        <div className="flex ">
          <div>
            <span className="after:content-['']">First Name:</span>
            <input
              className="h-12 rounded-md outline-none w-[188px] text-gray px-2"
              placeholder=" First Name.."
              type="email"
            />
          </div>
          <div>
            <span className="after:content-['']">Last Name:</span>
            <input
              className="h-12 rounded-md outline-none w-[198px] text-gray px-2"
              placeholder=" Last Name.."
              type="email"
            />
          </div>
        </div>
        <div>
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          /> <span className="text-green">Team policy agree..</span>
        </div>
        <div className="text-center">
            <button className=" rounded-md shadow-md w-32 h-10 border transition hover:bg-[#8299b6] border-gray">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Sign_in;
