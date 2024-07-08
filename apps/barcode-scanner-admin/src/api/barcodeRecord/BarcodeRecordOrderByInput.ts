import { SortOrder } from "../../util/SortOrder";

export type BarcodeRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  barcode?: SortOrder;
  url?: SortOrder;
};
