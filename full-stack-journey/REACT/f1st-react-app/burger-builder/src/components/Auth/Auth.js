import React, { Component } from 'react';
import { Formik } from 'formik';
import { auth } from '../../redux/authActionCreators';
import { Alert } from 'reactstrap'
import { connect } from 'react-redux';
import Spinner from '../Spinner/spinner';

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToprops = state => {
    return {
        authLoading: state.authLoading,
        authFailedmsg: state.authFailedmsg
    }
}

class Auth extends Component {
    state = {
        mode: "Sign Up",
    }
    switchModeHandler = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up"
        })
    }
    render() {
        let error = null;
        if (this.props.authFailedmsg !== null) {
            error = <Alert color='danger'>{this.props.authFailedmsg}</Alert>
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = (
                <Formik initialValues={
                    {
                        email: '', password: '', passwordConfirm: ''
                    }
                }
                    onSubmit={
                        (values) => {
                            this.props.auth(values.email, values.password, this.state.mode);
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
                        else if (values.password.length < 6) {
                            errors.password = 'Must be at least 6 characters';
                        }

                        if (this.state.mode === "Sign Up") {
                            if (!values.passwordConfirm) {
                                errors.passwordConfirm = 'Required';
                            }
                            else if (values.password !== values.passwordConfirm) {
                                errors.passwordConfirm = 'Password field does not match';
                            }
                        }
                        //console.log(errors);
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{ border: "1px grey solid", padding: "15px", borderRadius: "7px" }}>
                            <button style={{ width: "100%", backgroundColor: "#D70F64", color: "white" }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                            <br /><br />
                            <form onSubmit={handleSubmit}>
                                <input name='email' type='text' placeholder='Enter Your E-mail' className='form-control' value={values.email} onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <input name='password' type='password' placeholder='Password' className='form-control' value={values.password} onChange={handleChange} /> <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                {this.state.mode === "Sign Up" ? <div><input name='passwordConfirm' type='password' placeholder='Enter Your Password Again' className='form-control' value={values.passwordConfirm} onChange={handleChange} /> <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                    <br /></div> : null}
                                <button type='submit' className='btn btn-success'>{this.state.mode === "Sign Up" ? "Sign Up" : "Log in"}</button>
                            </form>
                        </div>
                    )}
                </Formik>
            )
        }
        return (
            <div>
                {error}
                {form}
            </div >
        )
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Auth);