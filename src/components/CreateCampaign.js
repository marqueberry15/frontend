import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { Toast, ToastContainer } from "react-bootstrap";
import { useNavigate , } from "react-router-dom";

import { campaignCreated } from "../actions";

const ToastComp = ({ show,onClose }) => {
    
  return (
      <ToastContainer>
      <Toast show={show.show}  delay={3000} autohide onClose={onClose}>
          <Toast.Header >
              <strong className="me-auto">ALERT</strong>
          </Toast.Header>
          <Toast.Body>{show.msg}</Toast.Body>
      </Toast>
      </ToastContainer>
  )
}

const CreateCampaign = ({ handleClose }) => {
  const [show, setShow] = useState(true);
  const userId = useSelector((state) => state.userId);
  const USER = sessionStorage.getItem("USER");
  const [showToast, setshowToast] = useState({ show: false, msg: '' });
 const navigate = useNavigate()
  const toggleShow = () => setShow({show: false, msg:''});

  const dispatch = useDispatch();
  const parseUser = JSON.parse(USER);
  return (
    <>
     <ToastComp show={showToast} onClose={toggleShow} />
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Campaign</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={
            {
              // firstName: '',
              // lastName: '',
              // email: '',
            }
          }
          onSubmit={(values) => {
            let formData = new FormData(); //formdata object

            formData.append("brand_name", values.brand_name); //append the values with key, value pair
            formData.append("campaign_name", values.campaign_name);
            formData.append("logo", values.logo);
            formData.append("time_limit", values.time_limit);
            formData.append("description", values.description);
            formData.append("no_of_meme_needed", values.no_of_meme_needed);
            formData.append("userId", parseUser.userId);

            const config = {
              headers: { "content-type": "multipart/form-data" },
            };
            axios
              .post(
                `http://52.66.136.133:8081/createCampaign`,
                formData,
                config
              )
              .then((res) => {
                if (res.status === 200) {
                  setshowToast({
                    show:true,
                    msg: "Campaign created successfully"
                  })  
                  setTimeout(()=>{
                    handleClose()
                  dispatch(campaignCreated())
                  navigate("/dashboard/home");
                  window.location.reload(false);
                  },3000)
                }
              });
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="brand_name" placeholder="Brand Name" required />
              <Field
                name="campaign_name"
                placeholder="Campaign Name"
                required
              />
              <div className="file-upload">
                <p>Upload Logo</p>
                <input
                  type="file"
                  onChange={(event) => {
                    setFieldValue("logo", event.target.files[0]);
                  }}
                  required
                />
              </div>
             
              <Field name="description" placeholder="Description" required />
            
              <Field
                name="static_meme"
                placeholder="Static Meme Quantity"
                type="number"
                min="1"
                required
              />
              <Field
                name="video_meme"
                placeholder="Video Meme Quantity"
                type="number"
                min="1"
                required
              />
              <Field
                name="gif"
                placeholder="Gif Meme Quantity"
                type="number"
                min="1"
                required
              />
               <Field
                name="time_limit"
                placeholder="Time Limit(Days)"
                type="number"
                min="1"
                required
              />
              <button type="submit" className="custom-btn">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default CreateCampaign;
