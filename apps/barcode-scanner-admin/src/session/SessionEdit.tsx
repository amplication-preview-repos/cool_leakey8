import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdminTitle } from "../admin/AdminTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="token" source="token" />
        <ReferenceInput source="admin.id" reference="Admin" label="admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
