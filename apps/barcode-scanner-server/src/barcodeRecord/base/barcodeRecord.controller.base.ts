/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BarcodeRecordService } from "../barcodeRecord.service";
import { BarcodeRecordCreateInput } from "./BarcodeRecordCreateInput";
import { BarcodeRecord } from "./BarcodeRecord";
import { BarcodeRecordFindManyArgs } from "./BarcodeRecordFindManyArgs";
import { BarcodeRecordWhereUniqueInput } from "./BarcodeRecordWhereUniqueInput";
import { BarcodeRecordUpdateInput } from "./BarcodeRecordUpdateInput";

export class BarcodeRecordControllerBase {
  constructor(protected readonly service: BarcodeRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BarcodeRecord })
  async createBarcodeRecord(
    @common.Body() data: BarcodeRecordCreateInput
  ): Promise<BarcodeRecord> {
    return await this.service.createBarcodeRecord({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BarcodeRecord] })
  @ApiNestedQuery(BarcodeRecordFindManyArgs)
  async barcodeRecords(
    @common.Req() request: Request
  ): Promise<BarcodeRecord[]> {
    const args = plainToClass(BarcodeRecordFindManyArgs, request.query);
    return this.service.barcodeRecords({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BarcodeRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async barcodeRecord(
    @common.Param() params: BarcodeRecordWhereUniqueInput
  ): Promise<BarcodeRecord | null> {
    const result = await this.service.barcodeRecord({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BarcodeRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBarcodeRecord(
    @common.Param() params: BarcodeRecordWhereUniqueInput,
    @common.Body() data: BarcodeRecordUpdateInput
  ): Promise<BarcodeRecord | null> {
    try {
      return await this.service.updateBarcodeRecord({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          barcode: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BarcodeRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBarcodeRecord(
    @common.Param() params: BarcodeRecordWhereUniqueInput
  ): Promise<BarcodeRecord | null> {
    try {
      return await this.service.deleteBarcodeRecord({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          barcode: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
