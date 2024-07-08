import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BarcodeRecordWhereInput = {
  id?: StringFilter;
  barcode?: StringNullableFilter;
  url?: StringNullableFilter;
};
