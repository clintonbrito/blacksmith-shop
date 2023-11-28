import { OrderWithProductIds } from "../../src/types/Order";

export const findAllOrdersFromService: OrderWithProductIds[] = [
  {
    "id": 1,
    "userId": 2,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 1,
    "productIds": [3, 4]
  },
  {
    "id": 3,
    "userId": 1,
    "productIds": [1, 3]
  }
];