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
        <div className="container py-5">
            <div className="row py-5 g-0 align-items-center">
                <div className="col-lg-6 py-5 mb-5 mb-lg-0">
                    
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
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
                                <button type="submit" className="btn btn-outline-dark d-flex">Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="col-lg-6 mb-5   p-2 mb-lg-0 ">
                    <div >
                        <img src="https://static.vecteezy.com/system/resources/previews/014/219/604/non_2x/safety-login-page-3d-illustration-free-png.png" className="img " height='400rem' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}    

export default Login;
