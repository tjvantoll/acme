import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { Input, TextArea } from "@progress/kendo-react-inputs";
import { Label, FloatingLabel } from '@progress/kendo-react-labels';
import { Error } from "@progress/kendo-react-labels";

const {
  Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
  ForeColor, BackColor, CleanFormatting,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Indent, Outdent, OrderedList, UnorderedList,
  Undo, Redo, FontSize, FontName, FormatBlock,
  Link, Unlink, InsertImage, ViewHtml,
  InsertTable, InsertFile,
  SelectAll, Print, Pdf,
  AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter,
  DeleteRow, DeleteColumn, DeleteTable,
  MergeCells, SplitCell,
  FindAndReplace
} = EditorTools;

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

            {/*
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
            */}

            <Label>Why do you want to join ACME?</Label>
            <Editor
              tools={[
                [Bold, Italic, Underline, Strikethrough, FindAndReplace],
                [ForeColor, BackColor, CleanFormatting, Print, Pdf, InsertFile, SelectAll]
                
              ]}
              contentStyle={{ height: 200 }}
              defaultContent=""></Editor>

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
