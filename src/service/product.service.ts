/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/model/product.model';
import { ApiResponse } from 'src/common/api-response.interface';

@Injectable()
export class ProductService {
  constructor(
    private readonly ProductModel: ProductModel,
  ) {}

  async getProductList(productType?: string): Promise<ApiResponse<any[]>> {
    const normalizedProductType = productType?.trim() || undefined;

    const groups = await this.ProductModel.findProductGroups(normalizedProductType);

    const list = groups.map((group) => ({
      sno: group.sno,
      groupNm: group.groupNm,
      titleColor: group.titleColor,
      status: group.status,
      sortNo: group.sortNo,
      regDt: this.formatDate(group.regDt),
      modDt: this.formatDate(group.modDt),
      products: (group.products || []).map((product) => ({
        productNo: product.productNo,
        productCd: null, // 현재 DDL에 없으니 우선 null
        productType: product.productType,
        productKind: product.productKind,
        groupSno: product.groupSno,
        siteMemberOnlyFl: product.siteMemberOnlyFl,
        siteCd: product.siteCd,
        productNm: product.productNm,
        productDesc: product.productDesc,
        message: product.message,
        sortNo: product.sortNo,
        priceLabel: product.priceLabel,
        productPrice: product.productPrice,
        salePrice: product.salePrice,
        stockCnt: product.stockCnt,
        optionFl: product.optionFl,
        optionDesc: product.optionDesc,
        optionType: product.optionType,
        dataType: product.dataType,
        subscriptionFl: product.subscriptionFl,
        consultingFl: product.consultingFl,
        productPoint: product.productPoint || [],
        thumbnail: product.thumbnail,
        images: product.images || [],
        descUrl: product.descUrl,
        status: product.status,
        displayFl: product.displayFl,
        appDisplayFl: product.appDisplayFl,
        payDisplayFl: product.payDisplayFl,
        regDt: this.formatDate(product.regDt),
        modDt: this.formatDate(product.modDt),
        groupNm: group.groupNm,
        optionInfo: (product.optionInfo || []).map((option) => ({
          siteCd: option.siteCd,
          optionNm: option.optionNm,
          stockCnt: option.stockCnt,
          optionSno: option.optionSno,
          productNo: option.productNo,
          salePrice: Number(option.salePrice),
          optionPrice: Number(option.optionPrice),
          optionValue: option.optionValue,
        })),
      })),
    }));

    return {
      result: 'success',
      list,
    };
  }

  private formatDate(date?: Date | null): string | null {
    if (!date) return null;

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mi = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
  }
}