import React, { useState } from 'react';
// import Logo from '../images/logo.png';
import { Container, Row, Col } from "react-bootstrap";
import 'react-phone-input-2/lib/style.css'
import { Formik, Field, Form } from 'formik';

import axios from 'axios';
import { config } from '../components/Constant';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router-dom";
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch } from 'react-redux';
import { setUser, setUserID} from '../actions';
import OuterHeader from './OuterHeader';


const ToastComp = ({ show,onClose }) => {
    
    return (
        <ToastContainer  position={'top-center'}>
        <Toast show={show.show}  delay={3000} autohide onClose={onClose}>
            <Toast.Header >
                <strong className="me-auto">ALERT</strong>
            </Toast.Header>
            <Toast.Body>{show.msg}</Toast.Body>
        </Toast>
        </ToastContainer>
    )
}
const ForgotPassword = () => {
    const [show, setShow] = useState({ show: false, msg: '' });
    const navigate = useNavigate();
    const toggleShow = () => setShow({show: false, msg:''});


    const dispatch = useDispatch();

    return (
        <section className='get-started'>

            <ToastComp show={show} onClose={toggleShow} />
            
            <Container>
                <Row className="justify-content-center">

                    <Col md={6} sm={12}>
                       <div className="form-heading">
                       <h2>Forget Password</h2>
                      
                       </div>
                        <Formik
                            className="contact-us"
                            initialValues={{
                                email: '',
                                
                            }}
                            onSubmit={async (values) => {
                                axios.get(`${config.API_URL}/forgetPassword?email=${values.email}`).then(res => {
                                    if(res.data.status === 200){
                                        setShow({
                                            show: true,
                                            msg: "Password has been sent to your registered mail"
                                        })
                                       setTimeout(() => {
                                       
                                        navigate("/sign-in")
                                       },3000)
                                    }else{
                                        setShow({
                                            show: true,
                                            msg: "Incorrect Email and Password"
                                        })
                                    }
                                })
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

                                <button type="submit" className='custom-btn'>Submit</button>
                            </Form>
                        </Formik>


                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ForgotPassword;