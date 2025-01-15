import React, { useState, useCallback, useMemo } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../cssfolder/adminRegister.css";
import FormikCheckBox from "../formikField/FormikCheckBox";
import FormikInput from "../formikField/FormikInput";
import FormikRadio from "../formikField/FormikRadio";
import FormikSelect from "../formikField/FormikSelect";
import FormikTextArea from "../formikField/FormikTextArea";

// Memoized field component to prevent unnecessary re-renders
const MemoizedField = React.memo(({ field, formik }) => {
  switch (field.component) {
    case "FormikInput":
      return (
        <FormikInput
          key={field.id}
          name={field.id}
          label={field.label}
          type={field.type}
          onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
        />
      );
    case "FormikRadio":
      return (
        <FormikRadio
          key={field.id}
          name={field.id}
          label={field.label}
          options={field.options}
          onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
        />
      );
    case "FormikCheckBox":
      return (
        <FormikCheckBox
          key={field.id}
          name={field.id}
          label={field.label}
          onChange={(e) => formik.setFieldValue(field.id, e.target.checked)}
        />
      );
    case "FormikTextArea":
      return (
        <FormikTextArea
          key={field.id}
          name={field.id}
          label={field.label}
          onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
        />
      );
    case "FormikSelect":
      return (
        <FormikSelect
          key={field.id}
          name={field.id}
          label={field.label}
          options={field.options}
          onChange={(e) => formik.setFieldValue(field.id, e.target.value)}
        />
      );
    default:
      return null;
  }
});

const RegisterUi = ({
  formik,
  genderOption,
  countryOption,
  button,
}) => {
  // Memoize the initial fields to avoid recreation on each render
  const initialFields = useMemo(() => [
    { id: "fullName", component: "FormikInput", label: "Full Name", type: "text" },
    { id: "email", component: "FormikInput", label: "Email", type: "email" },
    { id: "password", component: "FormikInput", label: "Password", type: "password" },
    { id: "age", component: "FormikInput", label: "Age", type: "number" },
    { id: "phoneNumber", component: "FormikInput", label: "Phone Number", type: "text" },
    { id: "gender", component: "FormikRadio", label: "Gender", options: genderOption },
    { id: "country", component: "FormikSelect", label: "Country", options: countryOption },
    { id: "hasCar", component: "FormikCheckBox", label: "Has Car" },
    { id: "description", component: "FormikTextArea", label: "Description" },
  ], [genderOption, countryOption]);

  const [fields, setFields] = useState(initialFields);

  // Memoize the onDragEnd function
  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    const reorderedFields = Array.from(fields);
    const [removed] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, removed);
    setFields(reorderedFields);
  }, [fields]);

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="formFields">
          {(provided) => (
            <form
              onSubmit={formik.handleSubmit}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable-field"
                    >
                      {/* Use MemoizedField to optimize rendering */}
                      <MemoizedField field={field} formik={formik} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <button type="submit">{button}</button>
            </form>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default RegisterUi;
