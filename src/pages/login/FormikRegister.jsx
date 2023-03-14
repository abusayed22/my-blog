import { Modal } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import FormController from "../../components/formikHandle/FormController";
import registerThunk from "../../redux/userAuth/authThunk/registerThunk";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";

function FormikRegister(props) {
  const { user, isLoading } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ===================== for formik
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cofirmPassword: "",
    professional: "",
    title: "",
  };

  const onSubmit = (value) => {
    const { name, email, password, professional, title } = value;
    dispatch(
      registerThunk({
        name,
        email,
        password,
        professional,
        title,
      })
    );
  };
  const validationSchema = yup.object({
    name: yup.string().required("required!"),
    email: yup.string().email("pleas valid Email here!").required("required!"),
    password: yup.string().required("required!"),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password"), ""], "password must match")
    //   .required("required!"),
    professional: yup.string().required("required!"),
    title: yup.string().required("required!"),
  });

  const isChecked = useAuthChecked();
  //   console.log(isChecked);

  useEffect(() => {
    if (isChecked) {
      navigate("/");
    }
    console.log(isChecked);
  }, [isChecked, navigate]);

  const inputStyle =
    "bg-gray h-8 border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue";

  return (
    <div className="dark:bg-black ">
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dark:bg-black h-[100vh]">
          <section className="">
            <div className="flex justify-center">
              <div className=" w-[80%] md:w-full mt-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 sm:p-8">
                  {/* formik form */}
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    {(formik) => {
                      return (
                        <Form className="flex flex-col gap-1">
                          <FormController
                            control="input"
                            name="name"
                            type="text"
                            label="Name"
                            className={inputStyle}
                          />
                          <FormController
                            control="input"
                            name="email"
                            type="email"
                            label="Email"
                            className={inputStyle}
                          />
                          <FormController
                            control="input"
                            name="password"
                            type="password"
                            label="Password"
                            className={inputStyle}
                          />
                          {/* <FormController
                            control="input"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            className={inputStyle}
                          /> */}
                          <FormController
                            control="input"
                            name="professional"
                            type="text"
                            label="Professional"
                            className={inputStyle}
                          />
                          <FormController
                            control="input"
                            name="title"
                            type="text"
                            label="Title"
                            className={inputStyle}
                          />
                          <div className="flex justify-center">
                            {isLoading ? (
                                <button
                                type="button"
                                disabled
                                className="border dark:text-white shadow-lg border-white bg-blue w-24 h-10 rounded-lg flex items-center justify-around p-[2px]"
                              >
                                <svg
                                  className="border-r-white border-t-white animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50"
                                  viewBox="0 0 24 24"
                                />
                                Loading...
                              </button>
                            ): (
                                <button
                              disabled={!formik.isValid}
                              onClick={onSubmit}
                              className={`border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg `}
                            >
                              Register
                            </button>
                            )}
                            <br />
                          </div>
                          <p>if already have your account! <Link className="text-red" to='/login'>click </Link></p>

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

export default FormikRegister;
