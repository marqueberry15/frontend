import React from "react";
import { Formik, Field, Form } from "formik";

const SubscrbeForm = () => {
    return(
        <div className="subscribe-form">
            <Formik 
                initialValues={{
                    email: ''
                }}
                onSubmit={() => {}}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                   <div>
                   <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    />
                    <button type="submit">Submit</button>
                   </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SubscrbeForm;