import { SessionUpdateManyWithoutAdminsInput } from "./SessionUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  username?: string | null;
  password?: string | null;
  sessions?: SessionUpdateManyWithoutAdminsInput;
};
