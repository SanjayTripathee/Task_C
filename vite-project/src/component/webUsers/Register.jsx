import axios from "axios";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { bUrl } from "../../../constant";
import RegisterUi from "./RegisterUi";

const Register = () => {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    country: "nepal",
    hasCar: false,
    description: "",
    phoneNumber: "",
    age: 0,
  };

  let onSubmit = async (values, { resetForm }) => {
    const {
      fullName,
      email,
      password,
      gender,
      country,
      hasCar,
      description,
      phoneNumber,
      age,
    } = values;

    const data = {
      fullName,
      email,
      password,
      gender,
      country,
      hasCar,
      description,
      phoneNumber,
      age,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "POST",
        data,
      });
      toast.success("Successfully Created");
      resetForm(); // Reset the form after a successful submission
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  let validationSchema = yup.object({
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(10, "fullName most be atleast 10 character")
      .max(15, "fullName most be atMost 15 character")
      .matches(/^[a-zA-Z ]*$/, "Only alphabet and space is allowed"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        "Email is not valid"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "password most be atleast 8 character")
      .max(15, "password most be atMost 15 character")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
        "Password must be atleast 8 characters long and atmost 15 character, contain uppercase and lowercase letters, a number, and a special character"
      ),
    gender: yup.string().required("Gender is required"),
    country: yup.string().required("Country is required"),
    hasCar: yup.boolean(),
    description: yup.string(),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .min(10, "must atleast 10 character")
      .max(10, "must atmost 10 character")
      .matches(/^[0-9]+$/, "only number is allowed"),
    age: yup
      .number()
      .required("Age is required")
      .min(18, "+18 atleast age must be"),
  });

  const genderOption = useMemo(
    () => [
      { value: "male", label: "Male" },
      { value: "femail", label: "Femail" },
      { value: "other", label: "Other" },
    ],
    []
  );

  const countryOption = useMemo(
    () => [
      { value: "nepal", label: "Nepal" },
      { value: "india", label: "India" },
      { value: "bangladesh", label: "Bangladesh" },
    ],
    []
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <RegisterUi
              formik={formik}
              fullName={formik.values.fullName}
              email={formik.values.email}
              password={formik.values.password}
              country={formik.values.country}
              gender={formik.values.gender}
              hasCar={formik.values.hasCar}
              description={formik.values.description}
              phoneNumber={formik.values.phoneNumber}
              age={formik.values.age}
              genderOption={genderOption}
              countryOption={countryOption}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              button="Submit"
            /> //passing formik to AdminREgister
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
