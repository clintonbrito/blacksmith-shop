import { Request, Response } from 'express';
import productService from '../services/product.service';
import { Product } from '../types/Product';

const create = async (req: Request, res: Response): Promise<Response> => {
  const product: Omit<Product, 'id'> = req.body;

  const { status, data } = await productService.create(product);

  return res.status(status).json(data);
};

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const products = await productService.findAll();

  return res.status(products.status).json(products.data);
};

export default {
  create,
  findAll,
};