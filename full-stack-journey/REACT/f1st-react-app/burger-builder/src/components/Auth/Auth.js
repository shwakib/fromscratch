import React, { Component } from 'react';
import { Formik } from 'formik';

class Auth extends Component {
    render() {
        return (
            <div>
                <Formik initialValues={
                    {
                        email: '', password: '', passwordConfirm: ''
                    }
                }
                    onSubmit={
                        (values) => {
                            console.log("values: ", values);
                        }
                    }
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Required';
                        }
                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid Email Address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        else if (values.password.length < 4) {
                            errors.password = 'Must be at least 4 characters';
                        }

                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        }
                        else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password field does not match';
                        }

                        //console.log(errors);
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{ border: "1px grey solid", padding: "15px", borderRadius: "7px" }}>
                            <form onSubmit={handleSubmit}>
                                <input name='email' type='text' placeholder='Enter Your E-mail' className='form-control' value={values.email} onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <input name='password' type='password' placeholder='Password' className='form-control' value={values.password} onChange={handleChange} /> <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                <input name='passwordConfirm' type='password' placeholder='Enter Your Password Again' className='form-control' value={values.passwordConfirm} onChange={handleChange} /> <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                <br />
                                <button type='submit' className='btn btn-success'>Sign Up</button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Auth;