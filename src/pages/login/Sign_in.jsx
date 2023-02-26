import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import loading from "../../assets/loading.gif"
import { ValidateEmail } from "../../utils/validationChecked/ValidateEmail";
import registerThunk from "../../redux/userAuth/authThunk/registerThunk";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";

function Sign_in() {

  const { user, isLoading } = useSelector(state => state.user);
  // console.log(isLoading);
  const [open, setOpen] = useState(true);
  // sign in
  const [signErr, setSignErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const isChecked = useAuthChecked();
console.log(isChecked);
  // const match = useMatch("/");

  useEffect(() => {
    if(isChecked) {
      navigate('/')
    }
  },[isChecked,navigate])
  // submit handler 
  const signSubmitHandler = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || password === "" || professional === "" || title === "") {
      setSignErr(true)
    } else {
      dispatch(registerThunk({
        name,
        email,
        password,
        professional,
        title
      }));
    }
      
      // if(!match) {
      //   navigate('/')
      // }
  }
  

  return (
    <div className="dark:bg-black">
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dark:bg-black ">


            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

              <div className="w-full h-[95vh] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
                  <h1 className="text-lg font-bold tracking-tight md:text-2xl dark:text-white">
                    Create and account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      
                      <input
                        type="text"
                        name="name"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Type your Name"
                        required=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onClick={() => setSignErr(false)}
                      />
                    </div>
                    <div>

                      {isEmailValid ? (
                        <>
                          
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
                    <div>
                      
                      <input
                        type="text"
                        name="professional"
                        id="professional"
                        placeholder="profession"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={professional}
                        onChange={(e) => setprofessional(e.target.value)}
                        onClick={() => setSignErr(false)}
                      />
                    </div>
                    <div>
                      
                      <input
                        type="text"
                        name="professional"
                        id="professional"
                        placeholder="Title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        {signErr ? (<button disabled onClick={signSubmitHandler} className={`border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}>
                          Sigin-in
                        </button>) : (
                          <button onClick={signSubmitHandler} className={`border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}>
                            Sigin-in
                          </button>
                        )}
                      </div>
                    )}

                    {signErr ? (<p className="text-red">You have not filled any form...!</p>) : null}

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link to={'/login'}
                        className="font-medium text-primary-600 hover:underline- dark:text-yellow  text-blue"
                      >
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>


        </div>
      </Modal>
    </div>
  );
}

export default Sign_in;
