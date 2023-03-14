import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrText from './Error/ErrText';

function Input(props) {
    const {label,name,...rest} = props
    return (
        <div>
            <label className='font-semibold' htmlFor={name}>{label}</label>
            <Field name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrText}/>
        </div>
    );
}

export default Input;