import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

function Login() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
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
    <div className="dark:bg-black">
      <Button onClick={handleOpen}>Open modal</Button>
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
              variant="outlined"
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
              <button onClick={signHandler} className="border dark:text-white shadow-lg border-white bg-blue hover:text-yellow w-24 h-10 rounded-sm">
                Sigin-in
              </button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
