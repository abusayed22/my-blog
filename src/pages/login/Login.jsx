import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ValidateEmail } from "../../utils/validationChecked/ValidateEmail";
import loginThunk from "../../redux/userAuth/authThunk/loginThunk";

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
  const [sign, setSign] = useState(false);
  const signHandler = () => {
    setSign(prev => !prev)
  }


  const { user, isLoading } = useSelector(state => state.user);
  console.log(isLoading);
  // const [open, setOpen] = useState(true);
  // sign in
  const [signErr, setSignErr] = useState(false);
  const dispatch = useDispatch();
  // state for all input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [professional, setprofessional] = useState('');
  const [title, setTitle] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();

  // debounc email validation
  useEffect(() => {
    const getData = setTimeout(() => {
      // do that
      if (ValidateEmail(email)) {
        setIsEmailValid(true)
      } else {
        setIsEmailValid(false)
      }

    }, 2000);

    return () => clearTimeout(getData)

  }, [email]);


  // submit handler 
  const loginSubmitHandler = (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      setSignErr(true)
    } else {
      dispatch(loginThunk({
        email,
        password,
      }));
    }
  }

  return (
    <div className="dark:bg-black">
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dark:bg-black">


          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login Your Account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      {isEmailValid ? (
                        <>
                          <label
                            htmlFor="email"
                            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className=" bg-[#d9f99d] border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onClick={() => setSignErr(false)}
                          />
                        </>
                      ) :
                        (
                          <>
                            <label
                              htmlFor="email"
                              className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className=" bg-[#fecaca]  border border-red text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="name@company.com"
                              required=""
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onClick={() => setSignErr(false)}
                            />
                          </>
                        )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onClick={() => setSignErr(false)}
                      />
                    </div>
                    {isLoading ? (
                      <button type="button" disabled className="border dark:text-white shadow-lg border-white bg-blue w-24 h-10 rounded-lg flex items-center justify-around p-[2px]">
                        <svg
                          className="border-r-white border-t-white animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50"
                          viewBox="0 0 24 24"
                        />
                        Loading...
                      </button>
                    ) : (
                      <div className="w-[80%] mx-auto flex justify-center space-x-5">
                        {signErr ? (<button disabled onClick={loginSubmitHandler} className={`border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}>
                          Login-in
                        </button>) : (
                          <button onClick={loginSubmitHandler} className={`border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}>
                            Sigin-in
                          </button>
                        )}
                      </div>
                    )}

                    {signErr ? (<p className="text-red">You have not filled any form...!</p>) : null}

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link 
                      to={"/register"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>


        </div>
      </Modal>
    </div>
  );
}

export default Login;
