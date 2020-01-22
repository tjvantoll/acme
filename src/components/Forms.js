import React from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Checkbox, Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import countries from "../data/countries";

const requiredValidator = (value) => value ? "" : "This field is required.";

export default function Forms() {
  const handleSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit} className="k-form">

          <label className="k-form-field">
            <span>Username</span>
            <Field
              name="username"
              component={Input}
              validator={requiredValidator}
            />
          </label>

          <label className="k-form-field">
            <span>Password</span>
            <Field
              name="password"
              minLength={6}
              maxLength={18}
              component={Input}
              validator={requiredValidator}
            />
          </label>

          <label className="k-form-field">
            <span>Country</span>
            <Field
              style={{ width: "100%" }}
              name="country"
              component={DropDownList}
              data={countries}
              validator={requiredValidator}
            />
          </label>

          <div>
            <button
              className="k-button k-primary"
              disabled={!formRenderProps.allowSubmit}>
              Submit
            </button>
          </div>
        </form>
      )}>
    </Form>
  )
};
