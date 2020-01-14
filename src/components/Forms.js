import React from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Checkbox, Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import countries from "../countries";

const requiredValidator = (value) => value ? "" : "This field is required.";

const CustomInput = (fieldRenderProps) => {
  const { validationMessage, touched, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} style={{ width: "100%" }} />
      {
        touched && validationMessage &&
          (<div className={"k-required"}>{validationMessage}</div>)
      }
    </div>
  );
};

export default function Forms() {
  const handleSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit} className="k-form">
          <fieldset>
            <legend>Sign up for ACME:</legend>

            <label className="k-form-field">
              <span>Username</span>
              <Field
                name="username"
                component={CustomInput}
                validator={requiredValidator}
              />
            </label>

            <label className="k-form-field">
              <span>Password</span>
              <Field
                name="password"
                type="password"
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

            <div className="k-form-field">
              <Field
                name="terms"
                component={Checkbox}
                label="I accept the terms of service."
                validator={requiredValidator}
              />
            </div>

            <div>
              <button
                className="k-button"
                disabled={!formRenderProps.allowSubmit}>
                  Submit
              </button>
            </div>
          </fieldset>
        </form>
      )}>
    </Form>
  )
};
