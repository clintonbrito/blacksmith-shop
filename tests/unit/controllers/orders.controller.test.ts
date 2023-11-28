import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';
import { findAllOrdersFromService } from '../../mocks/ordersController.mock';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return all orders', async function () {
    // Arrange
    sinon.stub(orderService, 'findAll').resolves({ status: 200, data: findAllOrdersFromService });

    // Act
    const response = await orderController.findAll(req, res);

    // Assert
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(findAllOrdersFromService);
  });

});
