import { SessionCreateNestedManyWithoutAdminsInput } from "./SessionCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  username?: string | null;
  password?: string | null;
  sessions?: SessionCreateNestedManyWithoutAdminsInput;
};
