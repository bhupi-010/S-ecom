import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const CheckOut = () => {
  const checkOutSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
  });

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zip: "",
    state: "",
  };

  const handleSubmit = (values) => {
    console.log(values, "these are values");
    toast.success("checkout sucessful", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialState}
        validationSchema={checkOutSchema}
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
                          Shipping Address
                        </h2>
                        <Form>
                          <div className="form-outline ">
                            <label className="form-label">FirstName</label>
                            <Field
                              name="firstName"
                              className="form-control form-control-sm"
                            />
                            {errors.firstName && touched.firstName ? (
                              <div>{errors.firstName}</div>
                            ) : null}
                          </div>

                          <div className="form-outline ">
                            <label className="form-label">lastName</label>
                            <Field
                              name="lastName"
                              className="form-control form-control-sm"
                            />
                            {errors.lastName && touched.lastName ? (
                              <div>{errors.lastName}</div>
                            ) : null}
                          </div>

                          <div className="form-outline ">
                            <label className="form-label">phone</label>
                            <Field
                              name="phone"
                              className="form-control form-control-sm"
                            />
                            {errors.phone && touched.phone ? (
                              <div>{errors.phone}</div>
                            ) : null}
                          </div>

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
                            <label className="form-label">country</label>
                            <Field
                              name="country"
                              className="form-control form-control-sm"
                            />
                            {errors.country && touched.country ? (
                              <div>{errors.country}</div>
                            ) : null}
                          </div>

                          <div className="form-outline ">
                            <label className="form-label">city</label>
                            <Field
                              name="city"
                              className="form-control form-control-sm"
                            />
                            {errors.city && touched.city ? (
                              <div>{errors.city}</div>
                            ) : null}
                          </div>

                          <div className="form-outline ">
                            <label className="form-label">state</label>
                            <Field
                              name="state"
                              className="form-control form-control-sm"
                            />
                            {errors.state && touched.state ? (
                              <div>{errors.state}</div>
                            ) : null}
                          </div>

                          <div className="form-outline ">
                            <label className="form-label">zip</label>
                            <Field
                              name="zip"
                              className="form-control form-control-sm"
                            />
                            {errors.zip && touched.zip ? (
                              <div>{errors.zip}</div>
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
    </div>
  );
};

export default CheckOut;
