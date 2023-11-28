import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

type CreateServiceResponse = {
  status: number;
  data: Model<ProductInputtableTypes>
};

type FindAllServiceResponse = {
  status: number;
  data: Model<Product, ProductInputtableTypes>[]
};

const create = async (product: ProductInputtableTypes): Promise<CreateServiceResponse> => {
  const newProduct = await ProductModel.create(product);

  return { status: 201, data: newProduct };
};

const findAll = async (): Promise<FindAllServiceResponse> => {
  const products = await ProductModel.findAll();

  return { status: 200, data: products };
};

export default {
  create,
  findAll,
};