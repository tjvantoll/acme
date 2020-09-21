import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input, TextArea } from "@progress/kendo-react-inputs";
import { Error } from "@progress/kendo-react-labels";

const requiredValidator = (value: any) => value ? "" : "This field is required.";

const CustomInput = (fieldRenderProps: any) => {
  const { validationMessage, touched, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} style={{ width: "100%" }} />
      {
        touched && validationMessage &&
        <Error>{validationMessage}</Error>
      }
    </div>
  );
};

export default function SignUp() {

  const handleSubmit = (data: object) => {
    alert(JSON.stringify(data));
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement>
            <Field
              label="Username"
              name="username"
              component={CustomInput}
              validator={requiredValidator}
            />

            <Field
              label="Password"
              name="password"
              type="password"
              component={CustomInput}
              validator={requiredValidator}
            />

            <FloatingLabel
              className="k-textarea-container"
              editorId="reason"
              label="Why do you want to join ACME?">
              <TextArea
                name="reason"
                id="reason"
                autoSize={true}
              />
            </FloatingLabel>

            <div className="k-form-buttons">
              <Button
                primary={true}
                type="submit">
                Submit
              </Button>
            </div>
          </FormElement>
        )}>
      </Form>
    </>
  )
};
