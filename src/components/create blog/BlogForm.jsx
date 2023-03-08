import { Button } from "@mui/material";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from 'yup';

function BlogForm() {

    const initialValue = {
        title: '',
        description: '',
        tags: '',
        link: '',
        thumbnail: '',
    }
    const onSubmit = (value) => {
        console.log(console.log(value));
    }
    const validate = (value) => {
        let error = {};
        if (!value.title) {
            error.title = 'required@'
        }
    }
    const validationSchema = yup.object({
        title: yup.string().required('Required!'),
        description: yup.string().required('Required!'),
        tags: yup.string().required('Please valid your tags!'),
        thumbnail: yup.string().url('Valid picture url Please!').required('Required!')
    })

    return (<div className="w-[50%] mx-auto py-2">
        <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form onSubmit={onSubmit} className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <span htmlFor="Title">Title:</span>
                    <Field className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="title" id="title" placeholder="your blog title..." />
                    <ErrorMessage className="text-red" name="title" />
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="description">Description:</label>
                    <Field as='textarea' className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="description" id="Description" placeholder="your blog title..." />
                    <ErrorMessage className="text-red" name="description" />
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="tags">Tags:</label>
                    <Field className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="tags" id="tags" placeholder="your blog Tags..." />
                    <ErrorMessage className="text-red" name="tags" />
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="urlHobe">Cover Image:</label>
                    <Field className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="urlHobe" id="Cover Image" placeholder="your blog Image..." />
                    <ErrorMessage className="text-red" name="urlHobe" />
                </div>
                <br />
                <br />
               <button className="w-24 h-10 border border-white bg-[#443f3f8c] transition text-white hover:bg-[#443f3f52] rounded-md">
                Post 
               </button>
            </Form>
        </Formik>
    </div>)
}

export default BlogForm;