import { useState } from 'react';
import Layout from '../Layout';
import { showError, showLoading } from '../../utils/messages';
import { login } from '../../api/apiAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: false,
        loading: false,
        disabled: false,
        redirect: false
    });

    const { email, password, loading, error, redirect, disabled } = values;

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // alert(JSON.stringify(values));
        setValues({
            ...values,
            error: false,
            loading: true,
            disabled: true
        });
        console.log(values);
        login({ email, password })
            .then(response => {
                console.log(response);
                setValues({
                    email: '',
                    password: '',
                    disabled: false,
                    loading: false,
                    redirect: true
                })
                console.log(email, password, redirect);
            })
            .catch(err => {
                let errMsg = 'Something Went Wrong!!';
                if (err.response) {
                    errMsg = err.response.data;
                } else {
                    errMsg = 'Something Went Wrong!!';
                }
                setValues({
                    ...values, error: errMsg, disabled: false, loading: false
                })
            })
    }

    const signInForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Email:</label>
                <input name='email' type="email" className="form-control"
                    value={email} required onChange={handleChange} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password:</label>
                <input name="password" type="password" className="form-control"
                    value={password} required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-outline-primary" disabled={disabled}>Login</button>
        </form>
    );

    const redirectUser = () => {
        if (redirect) return <Navigate to='/' replace />;
    }

    return (
        <Layout title="Login" className="container col-md-8 offset-md-2">
            {redirectUser()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>Login Here</h3>
            <hr />
            {signInForm()}
            <hr />
        </Layout>
    );
}

export default Login;