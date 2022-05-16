const { expect } = require('chai');
const lib = require('../src/lib/logger');

// Logger
describe('Logger library', () => {
  describe('info()', () => {
    it('expect the "logger.info()" to exists and be a function', () => expect(typeof (lib.info)).to.be.equals('function'));
    it('expect the "logger.info()" function to not throw without an argument', () => expect(lib.info).to.not.throw());
  });

  describe('warn()', () => {
    it('expect the "logger.warn()" to exists and be a function', () => expect(typeof (lib.warn)).to.be.equals('function'));
    it('expect the "logger.warn()" function to not throw without an argument', () => expect(lib.warn).to.not.throw());
  });

  describe('error()', () => {
    it('expect the "logger.error()" to exists and be a function', () => expect(typeof (lib.error)).to.be.equals('function'));
    it('expect the "logger.error()" function to not throw without an argument', () => expect(lib.error).to.not.throw());
  });

  describe('log()', () => {
    it('expect the "logger.log()" to exists and be a function', () => expect(typeof (lib.log)).to.be.equals('function'));
    it('expect the "logger.log()" function to throw without an argument', () => expect(lib.log).to.throw());
  });
});
