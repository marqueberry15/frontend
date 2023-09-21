import React, { useState } from "react";
// import Logo from '../images/logo.png';
import { Container, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Field, Form } from "formik";
import OuterHeader from "./OuterHeader";
import axios from "axios";
import { config } from "../components/Constant";
import Toast from "react-bootstrap/Toast";
import { Link, useNavigate } from "react-router-dom";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";
import * as Yup from "yup";

const ToastComp = ({ show, onClose }) => {
  return (
    <ToastContainer position={"top-center"}>
      <Toast show={show.show} delay={3000} autohide onClose={onClose}>
        <Toast.Header>
          <strong className="me-auto">ALERT</strong>
        </Toast.Header>
        <Toast.Body>{show.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().min(2, "Too Short").required("Required"),
  last_name: Yup.string().min(2, "Too Short").required("Required"),
  company_name: Yup.string().min(2, "Too Short").required("Required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  password: Yup.string()
    .required("The Password field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
      `Must Contain 8 Characters, One Uppercase, One Lowercase,
        One Number`
    ),
});
const GetStarted = () => {
  const [phone, setPhone] = useState(null);
  const [show, setShow] = useState({ show: false, msg: "" });
  const navigate = useNavigate();
  const toggleShow = () => setShow({ show: false, msg: "" });
  const dispatch = useDispatch();
  


  return (
    <section className="get-started">
      <ToastComp show={show} onClose={toggleShow} />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <div className="form-heading">
              <h2>Get Started</h2>
              <p>Memes that helps you to reach the right audience</p>
            </div>
            <Formik
              className="contact-us"
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                mobileNo: phone,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log("sfsdfd", values);
                // values.preventDefault()
                await axios
                  .post(`${config.API_URL}/user/signup`, {
                    first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        company_name: values.company_name,
                        mobileNo: phone,
                        password: values.password,
                  })
                  .then((res) => {
                    if (res.data.status === 500) {
                      setShow({
                        show: true,
                        msg: res.data.msg,
                      });
                    } else {
                      let user = {
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        company_name: values.company_name,
                        mobileNo: phone,
                        password: values.password,
                        isAllowed: true,
                      };
                      let USER = {
                        userId: 0,
                        isLoggin: true,
                      };
                      sessionStorage.setItem("USER", JSON.stringify(USER));
                      dispatch(setUser(user));
                      navigate("/info");
                    }
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Row>
                    <Col md={6} sm={12}>
                      <Field name="first_name" placeholder="First Name" />
                      {errors.first_name && touched.first_name ? (
                        <div>{errors.first_name}</div>
                      ) : null}
                    </Col>
                    <Col md={6} sm={12}>
                      <Field name="last_name" placeholder="Last Name" />
                      {errors.last_name && touched.last_name ? (
                        <div>{errors.last_name}</div>
                      ) : null}
                    </Col>
                  </Row>
                  <Field name="company_name" placeholder="Company Name" />
                  {errors.company_name && touched.company_name ? (
                    <div>{errors.company_name}</div>
                  ) : null}
                  <PhoneInput
                    inputProps={{
                      name: "mobileNo",
                      required: true,
                    }}
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />

                  <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="string"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <Field
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <button type="submit" className="custom-btn">
                    Continue
                  </button>
                </Form>
              )}
            </Formik>

            <div className="form-bottom text-center mt-4">
              <p>
                By signing up you agree to our <strong>Terms of Service</strong>{" "}
                and <strong>Privacy Policy</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
