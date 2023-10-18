import React, { memo } from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form values", values);
  // setTimeout(() => {
  //   navigate('videos');
  // }, 1000);
};

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

const validationSchema = Yup.object({
  password: Yup.string().required("Password is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
});
const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    formik;
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="big">
            <h1>Login to continue</h1>
            <div className="cart">
              <div className="card-content">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                  <p>forgot password?</p>
                  <div className="btns">
                    <NavLink to={"/profile"}>
                      <button className="btn1">login</button>
                    </NavLink>
                    <button className="btn">G continue with google</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Login);
