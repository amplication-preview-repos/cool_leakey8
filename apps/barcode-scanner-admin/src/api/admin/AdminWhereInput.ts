import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  password?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
};
