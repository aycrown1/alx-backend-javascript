/**
 * @desc Test for Task 3
 */

const expect = require('chai').expect;
const sinon = require('sinon');
const calculateNumber = require('./2-calcul_chai');
const util = require('./utils');

describe('Test 3-payment', function () {
  it('calculateNumber && util.sendPaymentRequestToApi', function () {
      sinon.spy(util, 'calculateNumber');

      expect(util.calculateNumber('SUM', 100, 20)).to.be.equal(calculateNumber('SUM', 100, 20));
    expect(util.calculateNumber('DIVIDE', 100, 20)).to.be.equal(calculateNumber('DIVIDE', 100, 20));
    expect(util.calculateNumber('SUBTRACT', 100, 20)).to.be.equal(
	calculateNumber('SUBTRACT', 100, 20)
    );
      sinon.restore();
  });
});
