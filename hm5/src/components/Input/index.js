import React from 'react'
import { useField } from 'formik';

function Input(props) {
  const { label, name, classes, ...rest } = props;

  const [field, meta] = useField(name);


  return (
    <>
      <div className="control-form">
        <label htmlFor={name} className={classes}>{label}</label>
        <input className="input-form" id={name} {...field} {...rest} />
      </div>
      {meta.touched && meta.error && <div className='text-error'>{meta.error}</div>}
    </>
  )
}

export default Input
