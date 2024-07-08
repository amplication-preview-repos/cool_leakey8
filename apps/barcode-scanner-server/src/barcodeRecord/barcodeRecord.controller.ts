import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BarcodeRecordService } from "./barcodeRecord.service";
import { BarcodeRecordControllerBase } from "./base/barcodeRecord.controller.base";

@swagger.ApiTags("barcodeRecords")
@common.Controller("barcodeRecords")
export class BarcodeRecordController extends BarcodeRecordControllerBase {
  constructor(protected readonly service: BarcodeRecordService) {
    super(service);
  }
}
