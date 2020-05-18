import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Field, FieldWrapper, Form, FormElement } from "@progress/kendo-react-form";
import { Input, RadioGroup, RangeSlider, SliderLabel } from "@progress/kendo-react-inputs";
import { Error, Label, Hint } from "@progress/kendo-react-labels";
import { Stepper } from "@progress/kendo-react-layout";
import { ProgressBar, ChunkProgressBar } from "@progress/kendo-react-progressbars";

import countries from "../data/countries";

const stepperItems = [
  { label: "Cart", icon: "k-i-cart" },
  { label: "Delivery Address", icon: "k-i-marker-pin-target" },
  { label: "Payment Method", icon: "k-i-dollar" },
  { label: "Account", icon: "k-i-user", optional: true },
  { label: "Finish Order", icon: "k-i-track-changes-accept" }
];

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
      {/*
      <ProgressBar value={50} labelVisible={false}></ProgressBar>
      <ChunkProgressBar min={0} max={5} value={3}></ChunkProgressBar>
      <Stepper value={3} items={stepperItems}></Stepper>
      */}

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

            {/*
            <Label>Preferred contact method:</Label>
            <Field
              name="contact"
              label="Preferred contact method:"
              component={RadioGroup}
              data={[
                { label: "Email", value: "email" },
                { label: "Text", value: "text" },
                { label: "Phone", value: "phone" },
              ]}
            />
            */}

            {/*
            <RangeSlider
              step={25}
              min={0}
              max={500}
              defaultValue={{ start: 0, end: 500 }}
            >
              <SliderLabel position={0}>0</SliderLabel>
              <SliderLabel position={100}>100</SliderLabel>
              <SliderLabel position={200}>200</SliderLabel>
              <SliderLabel position={300}>300</SliderLabel>
              <SliderLabel position={400}>400</SliderLabel>
              <SliderLabel position={500}>500</SliderLabel>
            </RangeSlider>
            */}

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
