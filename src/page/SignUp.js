import { ErrorMessage, Field, Form, Formik} from "formik";
import React, {useState} from "react";
import { useHistory } from "react-router";
import firebase from "../config/firebase";
import * as Yup from "yup";

export default function SignUp(e) {
  const history = useHistory();
  const [IsLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value,formikBag) => {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then((res) => {
          history.replace('/');
          setIsLoading(false);
        }).catch((e) => {
          formikBag.setFieldError('email', e.message);
          setIsLoading(false);
        })
      }}
      validationSchema={Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().min(6).required(),
      })}
    >
      <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
          <Form className="m-5 w-10/12">
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
              Sign Up
            </h1>
            <div className="w-full my-6">
              <Field
                name="email"
                type="email"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Enter Your Email..."
              />
              <ErrorMessage name="email" />
            </div>
            <div className="w-full my-6">
            <Field
            name="password"
            type="password"
            className="p-2 rounded shadow w-full text-black"
            placeholder="Enter Your password..."

            />
            <ErrorMessage name="password" />
            </div>
            <div className="w-full my-10">
              <button
                type="submit"
                className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-300 text-black"
              >
                {
                        IsLoading ? (<i className="fas fa-circle-notch fa-spin"></i>) : ("Register")
                }
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
