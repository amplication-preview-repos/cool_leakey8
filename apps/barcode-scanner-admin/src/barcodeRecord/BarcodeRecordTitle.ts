import { BarcodeRecord as TBarcodeRecord } from "../api/barcodeRecord/BarcodeRecord";

export const BARCODERECORD_TITLE_FIELD = "barcode";

export const BarcodeRecordTitle = (record: TBarcodeRecord): string => {
  return record.barcode?.toString() || String(record.id);
};
