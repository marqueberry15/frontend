import React, { useState } from 'react';
// import Logo from '../images/logo.png';
import { Container, Row, Col } from "react-bootstrap";
import 'react-phone-input-2/lib/style.css'
import { Formik, Field, Form } from 'formik';

import axios from 'axios';
import { config } from '../components/Constant';
import Toast from 'react-bootstrap/Toast';
import { Link, useNavigate } from "react-router-dom";
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';
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
const ChangePassword = () => {
    const [show, setShow] = useState({ show: false, msg: '' });
    const navigate = useNavigate();
    const toggleShow = () => setShow({show: false, msg:''});
    const userId = useSelector(state => state.userId);

    

    return (
       
        <section className='get-started'>
            <ToastComp show={show} onClose={toggleShow} />
            
            <Col md={4} sm={12}>
                     
                        <Formik
                            className="contact-us"
                            initialValues={{
                                old_pass: '',
                                new_pass: '',
                                
                            }}
                            onSubmit={async (values) => {
                                axios.post(`${config.API_URL}/changePassword`, {...values, userId}).then(res => {
                                    if(res.data.status === 200){
                                       
                                    }else{
                                        setShow({
                                            show: true,
                                            msg: "Please type correct old password"
                                        })
                                    }
                                })
                            }}
                        >
                            <Form>
                                
                                <Field
                                    id="old_pass"
                                    name="old_pass"
                                    placeholder="Old Password"
                                    type="password"
                                    required
                                />
                                <Field
                                    id="new_pass"
                                    name="new_pass"
                                    placeholder="New Password"
                                    type="password"
                                    required
                                />


                                <button type="submit" className='custom-btn'>Submit</button>
                            </Form>
                        </Formik>

                    </Col>
        </section>
    )
}

export default ChangePassword;