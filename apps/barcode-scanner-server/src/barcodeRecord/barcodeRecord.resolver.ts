import * as graphql from "@nestjs/graphql";
import { BarcodeRecordResolverBase } from "./base/barcodeRecord.resolver.base";
import { BarcodeRecord } from "./base/BarcodeRecord";
import { BarcodeRecordService } from "./barcodeRecord.service";

@graphql.Resolver(() => BarcodeRecord)
export class BarcodeRecordResolver extends BarcodeRecordResolverBase {
  constructor(protected readonly service: BarcodeRecordService) {
    super(service);
  }
}
