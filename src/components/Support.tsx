import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import { Input, TextArea } from '@progress/kendo-react-inputs';
import { Error, Label } from '@progress/kendo-react-labels';
import { ExternalDropZone, Upload } from '@progress/kendo-react-upload';

import { getRandomProducts } from '../data/products';

const requiredValidator = (value: any) => value ? '' : 'This field is required.';

const CustomInput = (fieldRenderProps: any) => {
  const { label, touched, validationMessage, ...others } = fieldRenderProps;
  return (
    <div>
      <Label>
        {label}:
        <div>
          <Input {...others} style={{ width: '100%' }} />
          {
            touched && validationMessage &&
            <Error>{validationMessage}</Error>
          }
        </div>
      </Label>
    </div>
  );
};

const CustomTextArea = (fieldRenderProps: any) => {
  const { label, touched, validationMessage, ...others } = fieldRenderProps;
  return (
    <div>
      <Label>
        {label}:
        <div>
          <TextArea {...others} style={{ width: '100%' }} />
          {
            touched && validationMessage &&
            <Error>{validationMessage}</Error>
          }
        </div>
      </Label>
    </div>
  );
};

export default function Support() {
  const [products, setProducts] = React.useState<Array<any>>([]);
  const uploadRef = React.createRef<Upload>();

  React.useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  const CustomComboBox = (fieldRenderProps: any) => {
    const { label, touched, validationMessage, ...others } = fieldRenderProps;
    return (
      <div>
        <Label>
          {label}
          <div>
            <MultiColumnComboBox
              {...others}
              data={products}
              columns={[
                { field: 'name', header: 'Name', width: '300px' },
                { field: 'price', header: 'Price', width: '100px' },
                { field: 'inStock', header: 'In Stock', width: '100px' }
              ]}
              textField={"name"} />
            {
              touched && validationMessage &&
              <Error>{validationMessage}</Error>
            }
          </div>
        </Label>
      </div>
    );
  }

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
              label="Name"
              name="name"
              component={CustomInput}
              validator={requiredValidator}
            />

            <Field
              label="Which product do you need help with?"
              name="product"
              component={CustomComboBox}
              validator={requiredValidator}
            />

            <Field
              label="What issue are you having?"
              name="issue"
              component={CustomTextArea}
              validator={requiredValidator}
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
