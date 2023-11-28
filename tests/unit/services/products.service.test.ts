import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import { newProductBodyMock, productMock } from '../../mocks/products.mock';
import { productCreatedFromModel } from '../../mocks/productsModel.mock';
import productService from '../../../src/services/product.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should create a new product', async function () {
    // Arrange
    const newProduct = ProductModel.build(productCreatedFromModel);
    sinon.stub(ProductModel, 'create').resolves(newProduct);

    // Act
    const productCreated = await productService.create(newProductBodyMock);
    const expectedResult = { status: 201, data: newProduct };

    // Assert
    expect(productCreated).to.be.deep.equal(expectedResult);
  });

  it('should return all products', async function () {
    // Arrange
    const products = [ProductModel.build(productCreatedFromModel)];
    sinon.stub(ProductModel, 'findAll').resolves(products);

    // Act
    const productsFound = await productService.findAll();
    const expectedResult = { status: 200, data: products };

    // Assert
    expect(productsFound).to.be.deep.equal(expectedResult);
  });

});
