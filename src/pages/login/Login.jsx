import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // sign in
  const [sign,setSign] = useState(false);
  const signHandler = () => {
    setSign(prev => !prev)
  }


  return (
    <div className="dark:bg-black h-[50vh]">
      
{/* <img src="https://i.ibb.co/hXppSv7/sign.jpg" alt="sign" border="0" className="w-100% h-[100vh]"/> */}
      {/* <button onClick={handleOpen} className="border border-green my-4 mx-auto w-10">Login</button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dark:bg-black">
          <Box sx={style}>
            <p className="text-2xl text-center my-3">Login</p>
            <TextField
              id="outlined-basic"
              label="Email"
              className="w-[100%] text-red"
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className="w-[100%] "
            />
            <br />
            <br />
            <div className="w-96 mx-auto flex justify-center space-x-10">
              <button className="border dark:text-black shadow-lg hover:text-white border-green hover:bg-[#218b4a] transition w-24 h-10 rounded-sm">
                Login
              </button>
            </div>
            <br />
        <p className="text-sm text-rose">Don't have an account,then please do <Link to={"/sign_in"} className='text-blue'>Register</Link> yourself !</p>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
