import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  token?: StringNullableFilter;
  admin?: AdminWhereUniqueInput;
};
