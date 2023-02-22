import { Box, Checkbox, Modal, TextField } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";
import loading from "../../assets/loading.gif"

function Sign_in() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,

  };

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // sign in
  const [sign, setSign] = useState(false);
  const signHandler = () => {
    setSign(prev => !prev)
  }
  return (
    // <div className="dark:bg-black py-5">
    //   <div className=" shadow-deep flex flex-col space-y-5 p-5 w-[450px] h-[70vh] border border-gray dark:bg-[#64748b] bg-white rounded-md mx-auto">
    //     <p className="text-2xl text-center font-bold">sign-in</p>
    //     <div>
    //       <span className="after:content-['*']">Email</span>
    //       <input
    //         className="h-12 rounded-md outline-none w-[400px] text-gray px-2"
    //         placeholder=" example@gmail.com"
    //         type="email"
    //       />
    //     </div>
    //     <div>
    //       <span className="after:content-['*']">Password</span>
    //       <input
    //         className="h-12 rounded-md outline-none w-[400px] text-gray px-2"
    //         type="email"
    //         placeholder="Password"
    //       />
    //     </div>
    //     <div className="flex ">
    //       <div>
    //         <span className="after:content-['']">First Name:</span>
    //         <input
    //           className="h-12 rounded-md outline-none w-[188px] text-gray px-2"
    //           placeholder=" First Name.."
    //           type="email"
    //         />
    //       </div>
    //       <div>
    //         <span className="after:content-['']">Last Name:</span>
    //         <input
    //           className="h-12 rounded-md outline-none w-[198px] text-gray px-2"
    //           placeholder=" Last Name.."
    //           type="email"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <Checkbox
    //         defaultChecked
    //         sx={{
    //           color: pink[800],
    //           "&.Mui-checked": {
    //             color: pink[600],
    //           },
    //         }}
    //       /> <span className="text-green">Team policy agree..</span>
    //     </div>
    //     <div className="text-center">
    //         <button className=" rounded-md shadow-md w-32 h-10 border transition hover:bg-[#8299b6] border-gray">Create Account</button>
    //     </div>
    //   </div>
    // </div>
    <div className="dark:bg-black h-[50vh]">
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dark:bg-black ">
          <Box sx={style} >
            <p className="text-2xl text-center my-3">Sign up</p>
            {/* <form action=""></form> */}
            <TextField
              id="outlined-basic"
              label="Name"
              className="w-[100%] text-red"
              aria-disabled
              required
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              className="w-[100%] text-red"
              required
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className="w-[100%] "
              required
            />
            <br />
            <br />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="professional"
              type="text"
              autoComplete="current-password"
              className="w-[100%] "
              required
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Title"
              type="text"
              className="w-[100%]"
              required
            />
            <br />
            <br />
            <div className="w-96 mx-auto flex justify-center space-x-10">

              <button onClick={signHandler} className="border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg">
                Sigin-in
              </button>
              {/* TODO: defendices */}
              {/* <button type="button" disabled className="border dark:text-white shadow-lg border-white bg-blue w-24 h-10 rounded-lg flex items-center justify-around p-[2px]">
                <svg
                  className="border-r-white border-t-white animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50"
                  viewBox="0 0 24 24"
                />
                Loading...
              </button> */}
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Sign_in;
