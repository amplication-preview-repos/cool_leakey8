import { Module } from "@nestjs/common";
import { BarcodeRecordModuleBase } from "./base/barcodeRecord.module.base";
import { BarcodeRecordService } from "./barcodeRecord.service";
import { BarcodeRecordController } from "./barcodeRecord.controller";
import { BarcodeRecordResolver } from "./barcodeRecord.resolver";

@Module({
  imports: [BarcodeRecordModuleBase],
  controllers: [BarcodeRecordController],
  providers: [BarcodeRecordService, BarcodeRecordResolver],
  exports: [BarcodeRecordService],
})
export class BarcodeRecordModule {}
