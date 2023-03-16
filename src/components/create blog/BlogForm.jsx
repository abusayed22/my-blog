import { Button } from "@mui/material";
import { Form, Field, ErrorMessage, Formik, FieldArray, FastField, useFormik } from "formik";
import * as yup from 'yup';
import InputTextError from "../error/InputTextError";
import { useDispatch, useSelector } from "react-redux";
import FormController from "../formikHandle/FormController";
import ImageUpload from "./ImageUpload";
import { blog_post } from "../../redux/allBlog/action";
import { uniqueId } from "../../utils/randomIdcreate/UniqeId";
import PostBlog from "../../redux/allBlog/thunk/PostEdtiDelete/PostBlog";

function BlogForm() {
    const { user, isLoading, isError } = useSelector(state => state.user);
    const { authorOf } = useSelector(state => state.author)
    const dispatch = useDispatch();

    // "thumbnail"TODO:


    // formik handle
    const initialValue = {
        title: '',
        description: '',
        name: '',
        tags: [''],
        email: user.email,
        thumbnail: '',
        professional: '',
        link: ''
    }


    const onSubmit = (value) => {
        const postVlaue = {
            id: uniqueId(),
            title: value.title,
            description: value.description,
            name: value.name,
            tag: value.tags,
            email: user.email,
            thumbnail: value.thumbnail,
            // link: initialValue.thumbnail,
            professional: value.professional,
            date: Date.now(),
            tags: [],  //TODO:
            like: [],
            comments: []
        }
        dispatch(PostBlog(postVlaue))
        console.log('submit')

    }
    const validationSchema = yup.object({
        name: yup.string().required(),
        title: yup.string().required('Required!'),
        description: yup.string().required('Required!'),
        tags: yup.array().of(yup.string().required('required!')),
        email: yup.string().email("pleas valid Email here!").required("required!"),
        thumbnail: yup.string().required('Required!'),
        professional: yup.string().required('required!'),
        link: yup.string().required('required!')
    })

    return (<div className="w-[90%] mx-auto py-2">
        <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return (<Form>
                        <FormController
                            control="input"
                            name="name"
                            type="text"
                            label="Name your Account:"
                            className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                        />
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

                        {/* <div> */}
                            {/* <FieldArray>
                            {
                                (feildArray) => {
                                    const { push, remove, form } = feildArray;
                                    const { initialValues } = form;
                                    const { tags } = initialValues;
                                    <div className="form-control">
                                        {tags.map((tag, index) =>
                                            <div key={index}>
                                                <FormController
                                                    control="input"
                                                    name='tags'
                                                    type="text"
                                                    label="Tags:"
                                                    className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-10 p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                                                />
                                                
                                                <div className="form-control">
                                                    <label htmlFor="tags">Tags:</label>
                                                    <Field type='text' name='tags[0]' id='tags' />
                                                </div>

                                                <button type="button" onClick={() => remove(index)}>-</button>
                                                <button type="button" onClick={() => push('')}>+</button>
                                            </div>
                                        )}
                                    </div>
                                }
                            }
                        </FieldArray> */}
                        {/* </div> */}
                        <br />
                        <FormController
                            control="input"
                            name="email"
                            type="email"
                            label="Email:"
                            className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                        />
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
                        <FormController
                            control="input"
                            name="link"
                            type="text"
                            label="Profile image url:"
                            className="h-30 bg-gray border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray dark:focus:ring-blue dark:focus:border-blue"
                        />
                        <br />
                        {/* <div> */}
                        {/* <span className="font-semibold">Drag your Cover image</span> */}
                        {/* <div className="w-[100%] h-40 border-gray bg-yellow rounded-lg shadow-lg">
                            
                         <ImageUpload /> 
                          </div> */}
                        {/* </div> */}
                        <div className="flex justify-center">
                            <button disabled={!formik.isValid} onClick={onsubmit} className={`mx-auto border dark:text-white shadow-lg border-white bg-blue hover:bg-[#7DB9B6] transition-colors hover:text-yellow w-24 h-10 rounded-lg`}>
                                Post
                            </button>
                            
                            
                        </div>
                    </Form>)
                }
            }
        </Formik>
    </div>)
}

export default BlogForm;