import { expect } from 'chai';
import sinon from 'sinon';

// import ProductModel from '../../../src/database/models/product.model';
import { orderCreatedFromModel } from '../../mocks/ordersService.mock';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  // it('should return all orders', async function () {
  //   // Arrange
  //   const orders = [OrderModel.build(orderCreatedFromModel)];
    
  //   sinon.stub(OrderModel, 'findAll').resolves(orders);

  //   // Act
  //   const ordersFound = await orderService.findAll();
  //   const expectedResult = { status: 200, data: orders }

  //   // Asset
  //   expect(ordersFound).to.be.deep.equal(expectedResult);
  // });

  it('should return all orders', async function () {
    const orders = OrderModel.build(orderCreatedFromModel);

    sinon.stub(OrderModel, 'findAll').resolves([orders]);

    const result = await orderService.findAll();

    expect(result.status).to.be.equal(200);
  });

});
