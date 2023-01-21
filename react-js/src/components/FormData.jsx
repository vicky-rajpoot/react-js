import { useFormik } from "formik";
import React from "react";
import "../css/main.css";

const validate = values => {
    const errors = {}
    if (!values.firstname) {
        errors.firstname = 'required';
    }
    else if (values.firstname.length > 15) {
        errors.firstname = 'Must be 15 chars or less';
    }
}


export default function Form() {

    const formik = useFormik({
        initialValues : {
            email : '',
            firstname : '',
            lastname : '',
        },
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>
        <div className="formik-form">
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange}
            value={formik.values.email} />

            <label htmlFor="firstname"> First Name</label>
            <input type="text" id="firtsname" name="firstname" 
            onChange={formik.handleChange}
            value={formik.values.firstname}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" 
            onChange={formik.handleChange}
            value={formik.values.lastname}/>

            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    );
}