import React from "react";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { Form, Field } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";

export default function Forms() {
  const handleSubmit = () => {
    console.log("hi?");
    return false;
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit} className="k-form">
          <div>
            <Field
              name={"name"}
              component={Input}
              label="Name"
            />
          </div>
          <div>
            <Field
              name={"appointmentDate"}
              component={DateInput}
              label="Appointment Date"
            />
          </div>
          <div>
            <button className="k-button">Submit</button>
          </div>
        </form>
      )}>
    </Form>
  )
};
