import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdminTitle } from "../admin/AdminTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="token" source="token" />
        <ReferenceInput source="admin.id" reference="Admin" label="admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
