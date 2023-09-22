import { FormikStepper, FormikStep, InputField } from "formik-stepper";
import { Field } from "formik";
import "formik-stepper/dist/style.css";
import * as Yup from "yup";
import axios from "axios";
import { config } from "./Constant";

import { IndustryOptions } from "./IndustryOptions";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserID } from "../actions";
import { useState, useEffect } from "react";
// formData["first_name", user.first_name); //append the values with key, value pair
// formData["last_name", user.last_name);
// formData["email", user.email);
// formData["company_name", user.company_name);
// formData["mobileNo", user.mobileNo);
// formData["password", user.password);
// formData["IsLogo", values.IsLogo);
// formData["IsStock_image", values.IsStock_image);
// formData["brand_guidlines", values.brand_guidlines);
// formData["brand_name", values.brand_name);
// formData["campaign_industry", values.campaign_industry);
// formData["campaign_name", values.campaign_name);
// formData["gif", values.gif);
// formData["marketing_budget", values.marketing_budget);
// formData["static_meme", values.static_meme);
// formData["time_limit", values.time_limit);
// formData["video_meme", values.video_meme);
// formData["logo", fileUpload);

// const validationSchema = Yup.object().shape({
//     time_limit: Yup.number().required("Required"),
//     brand_guidlines: Yup.string().required("Required"),
//     brand_name: Yup.string().required("Required"),
//     campaign_industry: Yup.string().required("Required"),
//     target_audience: Yup.string().required("Required"),
// });

const ToastComp = ({ show, onClose }) => {
  return (
    <ToastContainer>
      <Toast show={show.show} delay={3000} autohide onClose={onClose}>
        <Toast.Header>
          <strong className="me-auto">ALERT</strong>
        </Toast.Header>
        <Toast.Body>{show.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

const Form = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState({ show: false, msg: "" });

  const toggleShow = () => setShow({ show: false, msg: "" });
  const user = useSelector((state) => state.user);

  console.log("user is", user);
  const [fileUpload, setFileUpload] = useState(null);
  const [preview, setPreview] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fileUpload) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(fileUpload);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [fileUpload]);

  const handleGoals = (e) => {
    e.preventDefault();
    var target = e.target;

    var parent = target.parentElement; //parent of "t
    if (e.target.checked) {
      parent.classList.add("selected");
    } else {
      parent.classList.remove("selected");
    }
  };
  const handleEstimation = (e) => {
    const allElements = document.querySelectorAll(".estimation label");
    allElements.forEach((element) => {
      element.classList.remove("selected");
    });
    var target = e.target;
    var parent = target.parentElement; //parent of "t
    parent.classList.add("selected");
  };
  const onSubmit = async (values, { setSubmitting }) => {
    let formData = new FormData(); //formdata object
    const configr = {
      headers: { "content-type": "multipart/form-data" },
    };
    console.log("VALLLLLLLLLLLLLL", values, fileUpload, formData);
    const textFields = {
      "first_name": user.first_name,
      "last_name": user.last_name,
      "email": user.email,
      "company_name": user.company_name,
      "mobileNo": user.mobileNo,
      "password": user.password,
      "IsLogo": values.IsLogo,
      "IsStock_image": values.IsStock_image,
      "brand_guidlines": values.brand_guidlines,
      "brand_name": values.brand_name,
      "campaign_industry": values.campaign_industry,
      "campaign_name": values.campaign_name,
      "gif": values.gif,
      "marketing_budget": values.marketing_budget,
      "static_meme": values.static_meme,
      "time_limit": values.time_limit,
      "video_meme": values.video_meme,
      "file":fileUpload
    };
  
    for (const key in textFields) {
     
      formData.append(key, textFields[key]);
    }

    console.log(formData,fileUpload)

    if (fileUpload != null) {
    
    
       

      await axios
        .post(`${config.API_URL}/brand/saveinfo`, formData, configr)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setUserID(res.data.userId));
            let USER = {
              first_name: user.first_name,
              userId: res.data.userId,
              isLoggin: true,
            };
            sessionStorage.setItem("USER", JSON.stringify(USER));
            navigate("/dashboard/home");
            window.location.reload(false);
          }
        });
    } else {
      setShow({
        show: true,
        msg: "Please upload Image",
      });
    }
  };

  return (
    <FormikStepper
      /// Accept all Formik props
      onSubmit={onSubmit} /// onSubmit Function
      initialValues={{
        marketing_budget: "Less than 2 lacs",
        marketing_goals: ["Brand Awareness"],
        IsStock_image: "Yes",
        IsLogo: "Yes",
      }}
      //   validationSchema={validationSchema}
      withStepperLine={false} /// false as default and If it is false, it hides stepper line
      nextButton={{ label: "Next" }}
      prevButton={{ label: "Back" }}
      // submitButton={{ label: "Done", style: { background: "blue" } }}
    >
      {/*  First Step */}
      <FormikStep>
        <Container>
          <Row className="justify-content-center">
            <Col md={6} sm={12}>
              <div className="form-header-content">
                <span>Step 1 of 3</span>
                <h2 className="stepper-form-heading">
                  What is your estimated monthly marketing budget?
                </h2>
                <h6>Select an estimated range</h6>
              </div>
              <div
                role="group"
                className="estimation"
                aria-labelledby="my-radio-group"
                onClick={handleEstimation}
              >
                <label className="selected">
                  <Field
                    type="radio"
                    name="marketing_budget"
                    value="Less than 2 lacs"
                  />
                  Less than 2 lacs
                </label>
                <label>
                  <Field
                    type="radio"
                    name="marketing_budget"
                    value="2 lacs - 8 lacs"
                  />
                  2 lacs - 8 lacs
                </label>

                <label>
                  <Field
                    type="radio"
                    name="marketing_budget"
                    value="8 lacs - 50 lacs "
                  />
                  8 lacs - 50 lacs
                </label>
                <label>
                  <Field
                    type="radio"
                    name="marketing_budget"
                    value="50 lacs & above"
                  />
                  50 lacs & above
                </label>
                <label>
                  <Field
                    type="radio"
                    name="marketing_budget"
                    value="Preferred not to disclose"
                  />
                  Preferred not to disclose
                </label>
              </div>
            </Col>
          </Row>
        </Container>
      </FormikStep>
      {/* Second Step */}
      <FormikStep>
        <Container>
          <Row className="justify-content-center">
            <Col md={6} sm={12}>
              <div className="form-header-content">
                <span>Step 2 of 3</span>
                <h2>Which Meme formats are you looking for?</h2>
              </div>
              <div className="form-meme">
                <InputField
                  name="static_meme"
                  label="Static Meme"
                  placeholder="Quantity"
                  type="number"
                  min="1"
                />
                <InputField
                  name="gif"
                  label="Gif Meme"
                  type="number"
                  placeholder="Quantity"
                  min="1"
                />
                <InputField
                  name="video_meme"
                  label="Video Meme"
                  type="number"
                  placeholder="Quantity"
                  min="1"
                />
              </div>

              <div className="form-campaign " style={{ marginTop: 50 }}>
                <InputField
                  name="time_limit"
                  label="Time Limit"
                  type="number"
                  placeholder="No. of Days"
                  min="1"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </FormikStep>
      <FormikStep>
        <ToastComp show={show} onClose={toggleShow} />
        <Container>
          <Row className="justify-content-center">
            <Col md={6} sm={12}>
              <div className="form-header-content">
                <span>Step 3 of 3</span>
                <h2>What are your primary content marketing goals?</h2>
                <h6>Select your goals</h6>
              </div>
              <div className="form-goals">
                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  onChange={(e) => handleGoals(e)}
                >
                  <label className="selected">
                    <Field
                      type="checkbox"
                      name="marketing_goals"
                      value="Brand Awareness"
                    />
                    Brand Awareness
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="marketing_goals"
                      value="Lead Generation"
                    />
                    Lead Generation
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="marketing_goals"
                      value="Customer Loyalty"
                    />
                    Customer Loyalty
                  </label>
                </div>
              </div>

              <div className="form-campaign">
                <div className="form-header-content">
                  <h2>Enter Campaign Details</h2>
                </div>
                <InputField
                  name="brand_name"
                  placeholder="Brand Name"
                  type="text"
                />
                <InputField
                  name="campaign_name"
                  placeholder="Campaign Name"
                  type="text"
                  required
                />
                <div className="file-upload ">
                  <div>
                    <p>Upload Logo</p>
                    <input
                      type="file"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        const maxSize = 5 * 1024 * 1024; // 5MB in bytes

                        if (file && file.size <= maxSize) {
                          setFileUpload(file);

                          // Optional: Show a preview if it's an image
                          const reader = new FileReader();
                          reader.onload = () => {
                            setPreview(reader.result);
                          };
                          reader.readAsDataURL(file);
                        } else {
                          alert("File size exceeds 5MB limit");
                          event.target.value = null; // Reset the input field
                        }
                      }}
                      required
                    />
                  </div>
                  <div>{preview && <img src={preview} alt="Preview" />}</div>
                </div>

                <Field
                  as="select"
                  name="campaign_industry"
                  placeholder="Choose the industry of your project"
                >
                  <option value={""} disabled selected>
                    Choose the industry of your project
                  </option>
                  {IndustryOptions.map((i) => (
                    <option value={i.value}>{i.value}</option>
                  ))}
                </Field>
                {/* <SelectField
                                name="industry"
                                placeholder="Choose the industry of your project"
                                options={IndustryOptions}
                            /> */}
                <Field
                  name="target_audience"
                  as="textarea"
                  placeholder="What’s your target audience?"
                ></Field>
              </div>
              <div className="form-logo">
                <p>Do you need your logo on design?</p>

                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="IsLogo" value="Yes" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="IsLogo" value="No" />
                    No
                  </label>
                </div>
                <p>Can Designer Use Stock Images?</p>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="IsStock_image" value="Yes" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="IsStock_image" value="No" />
                    No
                  </label>
                </div>
                <Field
                  name="brand_guidlines"
                  as="textarea"
                  placeholder="Brand Guidelines"
                ></Field>
              </div>
            </Col>
          </Row>
        </Container>
      </FormikStep>
    </FormikStepper>
  );
};

export const StepperForm = () => {
  return (
    <div className="stepper-form">
      <Container>
        <Row>
          <Col sm={12}>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
