import {
  Form,
  Field,
  ErrorMessage,
  Formik,
  FieldArray,
  FastField,
  useFormik,
} from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormController from "../../components/formikHandle/FormController";
import { useEffect } from "react";
import editBlog from "../../redux/allBlog/thunk/PostEdtiDelete/editBlog";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";

function EditPostAuthor() {
  const { id } = useParams();
  const { user, isLoading, isError } = useSelector((state) => state.user);
  const {
    blog,
    isLoading: blogLoading,
    isError: blogError,
  } = useSelector((state) => state.allBlog.blog);
  const {
    id: blogId,
    title,
    description,
    name,
    email,
    professional,
    proTitle,
    date,
    link,
    thumbnail,
    tags,
    like,
    comments,
  } = blog || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleBlogFetch(id));
  }, [dispatch, id]);

  // ===== formik handle
  const initialValue = {
    title,
    description,
    name,
    tags: tags?.join(" "),
    email,
    thumbnail,
    professional,
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    title: yup
      .string()
      .max(60, "Must be 60 characters or less")
      .required("Required!"),
    description: yup.string().required("Required!"),
    tags: yup.string().required("Required!"),
    email: yup.string().email("pleas valid Email here!").required("required!"),
    thumbnail: yup.string().required("Required!"),
    professional: yup.string().required("required!"),
  });

  const onSubmit = (value) => {
    const aTag = value.tags;
    const allTags = aTag.split(" ");
    const updateVlaue = {
      id: blogId,
      title: value.title,
      description: value.description,
      name: value.name,
      email: user.email,
      thumbnail: value.thumbnail,
      professional: value.professional,
      tags: allTags,
      proTitle,
      date,
      link,
      like,
      comments,
    };
    dispatch(editBlog(blogId, updateVlaue));
    navigate("/");
  };

  return (
    <div className="bg-[#778D45]">
      <div className="w-[80%] bg-[#aec09a8a] mx-auto">
        <div className="w-[90%] mx-auto py-2">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormController
                  control="input"
                  name="name"
                  type="text"
                  label="Name your Account:"
                  className="h-30 w-full bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <FormController
                  control="input"
                  name="email"
                  type="email"
                  label="Email:"
                  className=" h-30 w-full bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <FormController
                  control="textarea"
                  name="title"
                  type="text"
                  label="Title:"
                  className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <FormController
                  control="textarea"
                  name="description"
                  type="text"
                  label="Description:"
                  className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />

                <FormController
                  control="input"
                  name="tags"
                  type="text"
                  label="Tags:"
                  className=" h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <FormController
                  control="input"
                  name="professional"
                  type="text"
                  label="Your Profession:"
                  className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <FormController
                  control="input"
                  name="thumbnail"
                  type="text"
                  label="Cover image url:"
                  className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                />
                <br />
                <br />
                <div className="flex justify-center">
                  <button
                    className={`mx-auto border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg`}
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EditPostAuthor;
