// Register.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        nameErr: "",
        usernameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    });

    const changeData = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        let error = "";
        if (name === "name") {
            error = value.trim() === "" ? "This field is required" : value.length < 3 ? "Please enter a valid name" : "";
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = value.trim() === "" ? "This field is required" : !emailRegex.test(value) ? "Please enter a valid email address" : "";
        } else if (name === "username") {
            error = value.trim() === "" ? "This field is required" : value.length < 3 ? "Please enter a valid username" : "";
        } else if (name === "password") {
            error = value.trim() === "" ? "This field is required" : value.length < 5 ? "Password must be at least 5 characters long" : "";
        } else if (name === "confirmPassword") {
            error = value.trim() === "" ? "This field is required" : value !== userData.password ? "Passwords do not match" : "";
        }
        setErrors({ ...errors, [`${name}Err`]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).every(error => error === "")) {
            localStorage.setItem('userData', JSON.stringify(userData));
            console.log("User registered successfully:", userData);
            history.push("/login");
        } else {
            console.log("Form has errors. Cannot submit.");
        }
    };

    return (
        
        
        <div className="card mb-3 py-5">
          <div className="row g-0 py-5" >
            <div className="col-lg-4 d-none d-lg-flex align-items-center">
              <img src="https://t4.ftcdn.net/jpg/00/77/03/15/360_F_77031521_p6l9ZisQRCROrpqkNSyGmxXvvxzjMfb1.jpg" alt="Trendy Pants and Shoes" className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className={`form-control ${errors.nameErr ? "border-danger" : ""}`} type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={changeData} />
                    <p className='text-danger'>{errors.nameErr}</p>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className={`form-control ${errors.emailErr ? "border-danger" : ""}`} name="email" value={userData.email} onChange={changeData} />
                    <Form.Text className="text-danger">{errors.emailErr}</Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Control type="text" placeholder="Username" className={`form-control ${errors.usernameErr ? "border-danger" : ""}`} name="username" value={userData.username} onChange={changeData} />
                    <p className='text-danger'>{errors.usernameErr}</p>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className={`form-control ${errors.passwordErr ? "border-danger" : ""}`} name="password" value={userData.password} onChange={changeData} />
                    <p className='text-danger'>{errors.passwordErr}</p>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" className={`form-control ${errors.confirmPasswordErr ? "border-danger" : ""}`} name="confirmPassword" value={userData.confirmPassword} onChange={changeData} />
                    <p className='text-danger'>{errors.confirmPasswordErr}</p>
                  </Form.Group>
                  <Button disabled={Object.values(errors).some(error => error !== "")} variant='outline-dark mb-4' type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
export default Register;
