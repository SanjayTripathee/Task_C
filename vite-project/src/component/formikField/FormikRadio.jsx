import { Field, Form, Formik } from "formik";
import React from "react";

const FormikRadio = ({ name, label, onChange, options, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => (
          <div>
            {options.map((item, i) => {
              return (
                
                <div key={i}>
                  <label htmlFor={item.name}>{item.label}</label>
                  <input
                    {...field}
                    {...props}
                    id={item.name}
                    type="radio"
                    value={item.value}
                    // onChange={field.onChange} //short cut of <formicForm/>component code i.e onChange={(e) => {Formik.setFieldValue("firstName", e.target.value);  }}
                    onChange={onChange ? onChange : field.onChange}
                    checked={meta.value === item.value}
                  />
                  {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </Field>
    </div>
  );
};

export default FormikRadio;
