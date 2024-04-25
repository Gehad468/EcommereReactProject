import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = (values, { setSubmitting, setErrors }) => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData && storedUserData.email === values.email && storedUserData.password === values.password) {
            console.log("User logged in successfully:", storedUserData);
            localStorage.setItem('userData', JSON.stringify(storedUserData));
            window.location.href = '/products';
        } else {
            console.log("Invalid credentials. Please try again.");
            setSubmitting(false);
            setErrors({ password: 'Invalid email or password' });
        }
    };

    return (
        <div className="container py-5" >
            <div className="py-5">
                <h1 style={{ color: '#A27bad' }} className='text-center'>Login</h1>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <Field type="email" id="email" name="email" className={`form-control`} />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field type="password" id="password" name="password" className={`form-control`} />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
