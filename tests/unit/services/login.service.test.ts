import { expect } from 'chai';
import sinon from 'sinon';

import loginService from '../../../src/services/login.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  // it('should return a token when a valid username and password are provided', async function () {
  //   // Arrange
  //   const user = { username: 'bill', password: '1234asdf' };

  //   // Act
  //   const token = await loginService.loginUser(user);

  //   // Assert
  //   expect(token).to.be.a('string');
  // });
});
