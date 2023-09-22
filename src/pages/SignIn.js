import React, { useState } from "react";
// import Logo from '../images/logo.png';
import { Container, Row, Col } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import { Formik, Field, Form } from "formik";

import axios from "axios";
import { config } from "../components/Constant";
import Toast from "react-bootstrap/Toast";
import { Link, useNavigate } from "react-router-dom";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useDispatch } from "react-redux";
import { setUser, setUserID } from "../actions";
import OuterHeader from "./OuterHeader";

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
const SignIn = () => {
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
              <h2>Welcome back</h2>
              <p>
                Login to your brand dashboard and start managing your campaigns,
                order and much more.{" "}
              </p>
            </div>
            <Formik
              className="contact-us"
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                console.log("url is ", config.API_URL);
                await axios
                  .post(`${config.API_URL}/user/login`, values)
                  .then((res) => {
                    console.log("response is", res);
                    console.log("responses for sttaus", res);
                    if (res.status === 200) {
                      console.log("dispatch");
                      dispatch(setUserID(res.data.userid));
                      let USER = {
                        first_name: res.data.user.FirstName,
                        userId: res.data.user.Email,
                        isLoggin: true,
                      };
                      console.log("user", USER);
                      sessionStorage.setItem("USER", JSON.stringify(USER));
                      navigate("/dashboard/home");
                      window.location.reload(false);
                    } else {
                      setShow({
                        show: true,
                        msg: "Incorrect Email and Password",
                      });
                    }
                  });
              }}
            >
              <Form>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />

                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  required
                />

                <button type="submit" className="custom-btn">
                  Log In
                </button>
              </Form>
            </Formik>

            <Link to="/forgot-password">Forgot Password?</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
