import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../images/contact-us.png';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Formik, Field, Form } from 'formik';
import { GetStartedBtn } from "../components/GetStartedBtn";
import { Link } from "react-router-dom";
import axios from 'axios';
import {config} from '../components/Constant';
import * as Yup from 'yup';
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const ContactUsSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Required'),
});
const ContactForm = () => {
    const [phone, setPhone] = useState(null);
    const [formSuccess, setFormSucess] = useState(false);


    const thankYou = () => {
        setTimeout(()=> {
            setFormSucess(false);
        },3000)
    }
 return(
    <div className='position-relative'>
        {formSuccess && <div className="success-msg">Thank you for getting in touch!</div>}
    <div className={formSuccess ? 'success' : null}>
    <Formik
        className={'contact-us'}
        initialValues={{
            full_name: '',
            email: '',
            mobileNo: '',
            message: ''
        }}
        validationSchema={ContactUsSchema}
        onSubmit={(values,{resetForm}) => {
            values.mobileNo = phone
            console.log(values)
            axios.post(`${config.API_URL+'/mail/send'}`,values).then(res => {
       
                if(res.data.status === 200 && res.data.msg === 'Successfull'){
                    thankYou();
                    setFormSucess(true);
                    resetForm({values: ''})
                }
            });
           
            
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="full_name" placeholder='Full Name' />
                {errors.full_name && touched.full_name ? (
             <div>{errors.full_name}</div>
           ) : null}
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
                <PhoneInput
                    inputProps={{
                        name: 'mobileNo',
                        required: true,
                      }}
                    country={'in'}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                />
                 
                <Field id="message" name="message" placeholder="Message" />
                {errors.message && touched.message ? (
             <div>{errors.message}</div>
           ) : null}
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
    </div>
</div>
 )  
};

const Contact = () => {
    return (
        <>
            <section className="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} sm={12}>
                            <img src={HeroImage} alt="" />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={6} sm={12}>
                            <h1>Contact Us</h1>
                            <p>Let's connect and discuss how we can help you reach wide audience with the help of our wide range of services.</p>
                            <GetStartedBtn />
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="lets-chat">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={5} sm={8} xs={12}>
                            <h2>Let’s Chat</h2>
                             <ContactForm /> 
                            <Link to={"https://wa.me/message/7LCOEF2LE2WMD1"} target={'_blank'}>Let’s Chat on Whats App</Link>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="lets-start">
                <Container>
                    <h2>Want to become next viral thing</h2>
                    <GetStartedBtn />
                </Container>
            </section>
        </>
    )
}

export default Contact;