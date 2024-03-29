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
import FormController from "../formikHandle/FormController";
import { uniqueId } from "../../utils/randomIdcreate/UniqeId";
import PostBlog from "../../redux/allBlog/thunk/PostEdtiDelete/PostBlog";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const { user, isLoading, isError } = useSelector((state) => state.user);
  const { authorOf } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ===== formik handle
  const initialValue = {
    title: "",
    description: "",
    name: "",
    tags: "",
    email: user.email,
    thumbnail: "",
    professional: "",
    link: ""
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
    link: yup.string().required("Required!"),
    professional: yup.string().required("required!"),
  });

  const onSubmit = (value) => {
    const aTag = value.tags;
    const allTags = aTag.split(" ");
    const postVlaue = {
      id: uniqueId(),
      title: value.title,
      description: value.description,
      name: value.name,
      email: user.email,
      thumbnail: value.thumbnail,
      professional: value.professional,
      date: Date.now(),
      tags: allTags,
      like: [],
      comments: [],
      link: value.link
    };
    dispatch(PostBlog(postVlaue));
    navigate("/");
  };

  return (
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
              placeholder="Type your name"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="textarea"
              name="title"
              type="text"
              label="Title:"
              placeholder="Type your blog title in 60 characters!"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="textarea"
              name="description"
              type="text"
              label="Description:"
              placeholder="Type your blog description!"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="input"
              name="email"
              type="email"
              label="Email:"
              placeholder="Type email!"
              className=" h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="input"
              name="tags"
              type="text"
              label="Tags:"
              placeholder="Type tags are with space!"
              className=" h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="input"
              name="professional"
              type="text"
              label="Your Profession:"
              placeholder="Type your profession!"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="input"
              name="thumbnail"
              type="text"
              label="Cover Image url:"
              placeholder="Cover image url paste here!"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <FormController
              control="input"
              name="link"
              type="text"
              label="Profile Image url:"
              placeholder="Profile image url paste here!"
              className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
            />
            <br />
            <br />
            <div className="flex justify-center">
              <button
                className={`mx-auto border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg`}
                type="submit"
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BlogForm;
