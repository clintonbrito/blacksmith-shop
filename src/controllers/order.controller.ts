import { Request, Response } from 'express';
import orderService from '../services/order.service';
// import { Order } from '../typess/Order';

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.findAll();

  return res.status(orders.status).json(orders.data);
};

export default {
  findAll,
};