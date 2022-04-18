import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const auth = getAuth();

  const handleSubmit = (values) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((result) => {
        console.log(result, "this is login");
        setLoading(false);
        setRedirect(true);
        toast.success("Registration sucessful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error.message, "this is failed to login");
        setLoading(false);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          {redirect ? (
            <Redirect to="/login" />
          ) : (
            <Formik
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {(formik) => {
                return (
                  <>
                    <section className=" py-4" id="reg-back">
                      <div className="mask d-flex align-items-center h-80 ">
                        <div className="container h-100">
                          <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                              <div className="card" id="reg-card">
                              <div className="loginImage">
                              <img src="login.png" width="250" height="200" alt="login" />
                            </div>
                                <div className="card-body p-2 ">
                                  <h2 className="text-bold text-center mb-2 ">
                                    Register
                                  </h2>
                                  <Form>
                                    <div className="form-outline ">
                                      <label className="form-label">
                                        Email
                                      </label>
                                      <Field
                                        name="email"
                                        type="email"
                                        className="form-control form-control-sm"
                                      />
                                      {formik.errors.email &&
                                      formik.touched.email ? (
                                        <div>{formik.errors.email}</div>
                                      ) : null}
                                    </div>
                                    <div className="form-outline mb-3 ">
                                      <label className="form-label">
                                        password
                                      </label>
                                      <Field
                                        name="password"
                                        className="form-control form-control-sm"
                                      />
                                      {formik.errors.password &&
                                      formik.touched.password ? (
                                        <div>{formik.errors.password}</div>
                                      ) : null}
                                    </div>

                                    <div className="d-flex justify-content-center form-control-sm">
                                      <button
                                        type="submit"
                                        className="btn btn-success btn-sm "
                                      >
                                        Submit
                                      </button>
                                    </div>
                                    <p className="text-center text-muted mt-2 mb-0 ">
                                      already have account .
                                      <Link
                                        to="/login"
                                        className="fw-bold text-body"
                                      >
                                        <u>login here</u>
                                      </Link>
                                    </p>
                                  </Form>
                                  {/* <ToastContainer /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                );
              }}
            </Formik>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
