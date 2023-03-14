import { Button } from "@mui/material";
import { Form, Field, ErrorMessage, Formik, FieldArray, FastField,useFormik } from "formik";
import * as yup from 'yup';
import InputTextError from "../error/InputTextError";
import { useSelector } from "react-redux";

function BlogForm() {
    const {user,isLoading ,isError}= useSelector(state => state.user);

// formik handle

    const initialValue = {
        title: '',
        description: '',
        tags: [''],
        link: '',
        email: user.email,
        thumbnail: '',
    }
    const Submit = (value) => {
        console.log(console.log(value));
    }
    // const validate = (value) => {
    //     let error = {};
    //     if (!value.title) {
    //         error.title = 'required@'
    //     }
    // }
    const validationSchema = yup.object({
        title: yup.string().required('Required!'),
        description: yup.string().required('Required!'),
        tags: yup.string().required('Please valid your tags!'),
        email: yup.string().email().required(),
        thumbnail: yup.string().url('Valid picture url Please!').required('Required!')
    })

    return (<div className="w-[50%] mx-auto py-2">
        <Formik
            initialValues={initialValue}
            onSubmit={Submit}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            <Form className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <span htmlFor="Title">Title:</span>
                    <FastField className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="title" id="title" placeholder="your blog title..." />
                    <ErrorMessage name="title" component={InputTextError}/>
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="description">Description:</label>
                    <Field  as='textarea' className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="description" id="Description" placeholder="your blog title..." />
                    <ErrorMessage name="description" component={InputTextError}/>
                </div>
                <br />

                {/* Field array */}
                <Form >
                    <label htmlFor="List of Tags">List of Tags</label>
                    <FieldArray name="tags">
                    {fieldArray => {
                        const {push,remove,form} = fieldArray;
                        const {values} = form;
                        const {tags} = values;
                        // console.log(form.errors);
                    

                        return <div>
                            {tags?.map((tag,i) => (
                            <div key={i} className="flex mt-1">
                                <Field className='w-72 md:w-70 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name={`tag[${i}]`} placeholder={`tag ${(i +1)}`}></Field>
                                <button className="w-12 bg-white border border-yellow rounded-sm bg-[#1a201da4]" onClick={() => push('')}>+</button>
                                {i > 0 && <button className="w-12 bg-white border border-yellow rounded-sm bg-[#1a201da4]" onClick={() => remove(i)}>-</button>} 
                            </div>
                        ))}
                        </div>

                    }}
                    </FieldArray>
                </Form>
                <br />

                <div className="flex flex-col">
                    <label htmlFor="tags">Email:</label>
                    <input disabled className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="tags" id="tags" placeholder={user.email} />
                </div>
                <br />
                <div className="flex flex-col">
                    <label htmlFor="urlHobe">Cover Image:</label>
                    <Field className='w-80 md:w-96 h-10 border peer outline-green bg-[#1a201da4] text-yellow p-2 rounded-md' type="text" name="urlHobe" id="Cover Image" placeholder="your blog Image..." />
                    <ErrorMessage name="urlHobe" component={InputTextError}/>
                </div>
                <br />
                <br />
               <button type="submit" className="w-24 h-10 border border-white bg-[#443f3f8c] transition text-white hover:bg-[#443f3f52] rounded-md">
                Post 
               </button>
            </Form>
        </Formik>
    </div>)
}

export default BlogForm;