const { expect } = require('chai');
const lib = require('../src/index');

const appsFixtures = require('./fixtures/apps.json');
const optionsFixtures = require('./fixtures/options.json');

// Index
describe('Index', () => {
  describe('getAppStoresMetrics()', () => {
    it('expect the "getAppStoresMetrics()" to exists and be a function', () => expect(typeof (lib.getAppStoresMetrics)).to.be.equals('function'));
    it('expect the "getAppStoresMetrics()" function to not throw without an argument', () => expect(lib.getAppStoresMetrics).to.not.throw());
    it('expect the "getAppStoresMetrics()" function to return the correct option values', () => expect(lib.getAppStoresMetrics(appsFixtures)).to.be.deep.equals(optionsFixtures));
  });
});
