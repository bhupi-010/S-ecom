import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../action";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.productReducer.loggedIn);
  const initialState = {
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        const userEmail = user.user.email;

        dispatch(logIn(userEmail));
        setLoading(false);
        toast.success("Login sucessful", {
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
        toast.error("login failed " + error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          {loggedIn ? (
            <Redirect to="/home" />
          ) : (
            <Formik
              initialValues={initialState}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <section className="vh-80 " id="reg-back">
                  <div className="mask d-flex align-items-center h-100 ">
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                          <div className="card" id="reg-card">
                            <div className="card-body p-2 ">
                              <h2 className="text-bold text-center mb-5 ">
                                Login
                              </h2>
                              <Form>
                                <div className="form-outline ">
                                  <label className="form-label">Email</label>
                                  <Field
                                    name="email"
                                    type="email"
                                    className="form-control form-control-sm"
                                  />
                                  {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                  ) : null}
                                </div>
                                <div className="form-outline ">
                                  <label className="form-label">password</label>
                                  <Field
                                    name="password"
                                    className="form-control form-control-sm"
                                  />
                                  {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
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
                                  do not have account ?
                                  <Link
                                    to="/register"
                                    className="fw-bold text-body"
                                  >
                                    <u>Register here</u>
                                  </Link>
                                </p>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Formik>
          )}
        </div>
      )}

    </div>
  );
};

export default Login;
