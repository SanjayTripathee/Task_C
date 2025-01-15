import { Field, Form, Formik } from "formik";
import React from "react";

const FormikSelect = ({ name, label, onChange, options, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => (
          <div>
            <label htmlFor={name}>{label}</label>
            <select
              {...field}
              {...props}
              id={name}
              value={meta.value}
              onChange={onChange ? onChange : field.onChange}
            >
              {options?.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            {meta.touched && meta.error ? (
              <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
          </div>
        )}
      </Field>
    </div>
  );
};

export default FormikSelect;
