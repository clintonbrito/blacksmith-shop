export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderWithProductIds = {
  id: number;
  userId: number;
  productIds: number[];
};