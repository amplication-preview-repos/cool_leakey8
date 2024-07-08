import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";

export type SessionUpdateInput = {
  token?: string | null;
  admin?: AdminWhereUniqueInput | null;
};
