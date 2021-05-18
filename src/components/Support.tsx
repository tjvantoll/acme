import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { ExternalDropZone, Upload } from '@progress/kendo-react-upload';

export default function Support() {
  const uploadRef = React.createRef<Upload>();

  const handleSubmit = (data: object) => {
    alert(JSON.stringify(data));
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={() => (
          <FormElement>
            <Field
              label="What issue are you having?"
              name="issue"
              component={Input}
            />

            <Field
              label="When did you have the issue?"
              name="issueDate"
              placeholder=""
              component={DatePicker}
            />

            <ExternalDropZone
              uploadRef={uploadRef}
              customHint="Drag and drop an image of your issue here"
            />
            <Upload
              ref={uploadRef}
              batch={false}
              multiple={true}
              defaultFiles={[]}
              withCredentials={false}
              saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
              removeUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/remove"}
            />

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
