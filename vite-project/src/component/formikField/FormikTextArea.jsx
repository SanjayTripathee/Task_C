import { Field, Form, Formik } from "formik";
import React from "react";

const FormikTextArea = ({ name, label, onChange, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => (
          <div>
            <label htmlFor={name}>{label}</label>
            <textarea
              {...field}
              {...props}
              id={name}
              type="description"
              value={meta.value}
              // onChange={field.onChange} //short cut of <formicForm/>component code i.e onChange={(e) => {Formik.setFieldValue("firstName", e.target.value);  }}
              onChange={onChange ? onChange : field.onChange}
            />
            {meta.touched && meta.error ? (
              <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
          </div>
        )}
      </Field>
    </div>
  );
};

export default FormikTextArea;
