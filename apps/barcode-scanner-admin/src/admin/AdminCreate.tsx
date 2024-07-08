import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
