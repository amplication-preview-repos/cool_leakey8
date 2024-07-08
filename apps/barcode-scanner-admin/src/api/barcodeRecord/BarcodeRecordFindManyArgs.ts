import { BarcodeRecordWhereInput } from "./BarcodeRecordWhereInput";
import { BarcodeRecordOrderByInput } from "./BarcodeRecordOrderByInput";

export type BarcodeRecordFindManyArgs = {
  where?: BarcodeRecordWhereInput;
  orderBy?: Array<BarcodeRecordOrderByInput>;
  skip?: number;
  take?: number;
};
