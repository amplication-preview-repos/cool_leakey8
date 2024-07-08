import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BarcodeRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="barcode" source="barcode" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
