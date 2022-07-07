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
                            console.log(values);
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input name='email' type='text' placeholder='Enter Your E-mail' className='form-control' value={values.email} onChange={handleChange} />
                                <br />
                                <input name='password' type='password' placeholder='Password' className='form-control' value={values.password} onChange={handleChange} />
                                <br />
                                <input name='passwordConfirm' type='password' placeholder='Enter Your Password Again' className='form-control' value={values.passwordConfirm} onChange={handleChange} />
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