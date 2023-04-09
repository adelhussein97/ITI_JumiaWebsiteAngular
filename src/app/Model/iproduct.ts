export interface Iproduct {
  id: number,
  name: string,
  discountPercent: number,
  discription: string,
  isFeatured: boolean,
  quantity: number,
  unitPrice: number,
  insertingDate: Date,
  brandId: number,
  brand: string,
  prdImages: string,
  reviewId: number,
  rateId: number,
  categoryId: number,
  category: string
}
