import { ProductInputtableTypes } from "../../src/database/models/product.model"
import { Product } from "../../src/types/Product"

export const productMock = {
  "id": 2,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}

export const newProductBodyMock: ProductInputtableTypes = {
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
