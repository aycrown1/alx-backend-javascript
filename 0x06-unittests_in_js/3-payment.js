/**
 * @desc spies project
 */
const Util = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) {
    return `The total is:  ${Util.calculateNumber('SUM', totalAmount, totalShipping)}`;
};

module.exports = sendPaymentRequestToApi;
