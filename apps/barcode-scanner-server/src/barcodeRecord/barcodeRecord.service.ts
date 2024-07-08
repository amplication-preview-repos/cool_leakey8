import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BarcodeRecordServiceBase } from "./base/barcodeRecord.service.base";

@Injectable()
export class BarcodeRecordService extends BarcodeRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
