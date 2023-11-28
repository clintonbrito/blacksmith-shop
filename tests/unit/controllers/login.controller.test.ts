import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

chai.use(sinonChai);

import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return status 200 and a token when a valid username and password are provided', async function () {
    // Arrange
    req.body = { username: 'bill', password: '1234asdf' };
    const token = '5678qwer';
    const tokenObj = { token };
    sinon.stub(loginService, 'loginUser').resolves(token);

    // Act
    const response = await loginController.login(req, res);

    // Assert
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(tokenObj);
  });
});
