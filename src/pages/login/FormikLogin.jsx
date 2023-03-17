import { Modal } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import FormController from "../../components/formikHandle/FormController";
import loginThunk from "../../redux/userAuth/authThunk/loginThunk";
import { useDispatch } from "react-redux";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import { Link, useNavigate } from "react-router-dom";

function FormikLogin(props) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isChecked = useAuthChecked();
  useEffect(() => {
    if (isChecked) {
      handleClose();
      navigate(-1);
      console.log(isChecked);
    }
  }, [navigate, isChecked]);

  // ===================== for formik
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (value) => {
    const { email, password } = value;
    dispatch(
      loginThunk({
        email,
        password,
      })
    );
  };
  const validationSchema = yup.object({
    email: yup.string().email("pleas valid Email here!").required("required!"),
    password: yup.string().required("required!"),
  });

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
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <h1 className="text-yellow font-bold">Login</h1>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  {/* formik form */}
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <FormController
                            control="input"
                            name="email"
                            type="email"
                            label="Email"
                            className="bg-[#d9f99d] border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                          <br />
                          <FormController
                            control="input"
                            name="password"
                            type="password"
                            label="Password"
                            className="bg-[#d9f99d] border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                          <br />
                          <br />
                          <div className="flex justify-center">
                            <button
                              disabled={!formik.isValid}
                              onClick={onSubmit}
                              className={` border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}
                            >
                              Login
                            </button>
                          </div>
                          <br />
                          <p>you are not registred! <Link className="text-red" to='/register'>click </Link></p>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
}

export default FormikLogin;
