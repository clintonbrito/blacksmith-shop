import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import productController from '../../../src/controllers/product.controller';
import { newProductBodyMock } from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should create a new product', async function () {
    // Arrange
    req.body = newProductBodyMock;
    const newProduct = ProductModel.build(req.body);
    sinon.stub(productService, 'create').resolves({ status: 201, data: newProduct });

    // Act
    const response = await productController.create(req, res);

    // Assert
    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWith(newProduct);
  });

  it('should return all products', async function () {
    // Arrange
    const products = [ProductModel.build(newProductBodyMock)];
    sinon.stub(productService, 'findAll').resolves({ status: 200, data: products });

    // Act
    const response = await productController.findAll(req, res);

    // Assert
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(products);
  });
});
