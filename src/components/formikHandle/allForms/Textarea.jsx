import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrText from './Error/ErrText';

function Textarea(props) {
    const{name,label,...rest} = props;
    return (
        <div>
           <label className='font-semibold' htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrText}/>
        </div>
    );
}

export default Textarea;
