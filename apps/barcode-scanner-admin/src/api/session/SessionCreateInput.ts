import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";

export type SessionCreateInput = {
  token?: string | null;
  admin?: AdminWhereUniqueInput | null;
};
