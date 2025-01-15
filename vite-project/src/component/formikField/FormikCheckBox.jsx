import { Field, Form, Formik } from "formik";
import React from "react";

const FormikCheckBox = ({ name, label, onChange, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => (
          <div>
            <label htmlFor={name}>{label}</label>
            <input
              {...field}
              {...props}
              type="checkbox"
              id={name}
              //we dont required value because it is either true or false only
              checked={meta.value}
              onChange={onChange ? onChange : field.onChange}
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default FormikCheckBox;
