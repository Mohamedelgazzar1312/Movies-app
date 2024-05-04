import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  useNavigate } from "react-router-dom";
import"./login.css"

const SignForm = () => {
    const validateForm = (values) => {
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Enter a valid email address";
        }

        if (!values.name) {
            errors.name = "Name is required";
        }

        const usernameRegex = /^\S*$/;
        if (!values.username) {
            errors.username = "Username is required";
        } else if (!usernameRegex.test(values.username)) {
            errors.username = "Username should not contain spaces";
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*$#])[A-Za-z\d@*$#]{8,}$/;
        if (!values.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password =
                "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@*$#)";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    const handleSignUpSubmit = (values) => {
        axios
          .post("http://localhost:8080/users", {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password
         
          })
          .then((response) => {
            console.log(response.data);
            
            alert("You have registered successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      };
    const navigate =useNavigate();
    return (
        <div className="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'  }}>
            <div className="card" style={{width:"260px"}} >
                <div className="card-body" style={{boxshadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                    <h2 className="card-title text-center">Sign Up</h2>
                    <Formik
                        initialValues={{
                            email: "",
                            name: "",
                            username: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        validate={validateForm}
                        onSubmit={handleSignUpSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="name" className="form-control" placeholder="Enter your name" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name="username" className="form-control" placeholder="Enter username" />
                                    <ErrorMessage name="username" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <Field type="email" name="email" className="form-control" placeholder="email@example.com" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" className="form-control" placeholder="Password" />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                </div>
                                <div className="form-check">
                                    <Field type="checkbox" name="rememberMe" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                                <div className="dropdown-divider"></div>

                               


                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
      


        </div>

    );
};

export default SignForm;
