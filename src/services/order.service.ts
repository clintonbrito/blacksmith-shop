import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderWithProductIds } from '../types/Order';
import { Product } from '../types/Product';

type OrderTypeV2 = {
  id: number;
  userId: number;
  productIds: Product[];
};

type FindAllServiceResponse = {
  status: number;
  data: OrderWithProductIds[]
};

const findAll = async (): Promise<FindAllServiceResponse> => {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds' },
  });

  const newOrders = orders.map((order) => {
    const { id, userId } = order.dataValues;
    
    const newOrder = order.dataValues as OrderTypeV2;

    const productIds = newOrder.productIds ? newOrder.productIds.map((product) => product.id) : [];

    return { id, userId, productIds };
  });

  return { status: 200, data: newOrders };
};

export default {
  findAll,
};