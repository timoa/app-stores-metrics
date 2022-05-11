const { expect } = require('chai');

const lib = require('../src/lib/transform');
const gplayFixtures = require('./fixtures/gplay-whatsapp-gb.json');
const itunesFixtures = require('./fixtures/itunes-whatsapp-gb.json');

// Transform
describe('Transform library', () => {
  describe('mapDataToMetric()', () => {
    it('expect the "transform.mapDataToMetric()" to exists and be a function', () => expect(typeof (lib.mapDataToMetric)).to.be.equals('function'));
    it('expect the "transform.mapDataToMetric()" function to not throw without an argument', () => expect(lib.mapDataToMetric).to.not.throw());
    describe('mapDataToMetric() | GPlay', () => {
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 1 value', () => expect(lib.mapDataToMetric('ratings1', gplayFixtures)).to.be.equals(16448161));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 2 value', () => expect(lib.mapDataToMetric('ratings2', gplayFixtures)).to.be.equals(4232103));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 3 value', () => expect(lib.mapDataToMetric('ratings3', gplayFixtures)).to.be.equals(8657348));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 4 value', () => expect(lib.mapDataToMetric('ratings4', gplayFixtures)).to.be.equals(19837703));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 5 value', () => expect(lib.mapDataToMetric('ratings5', gplayFixtures)).to.be.equals(112594157));
    });
    describe('mapDataToMetric() | iTunes', () => {
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 1 value', () => expect(lib.mapDataToMetric('ratings1', itunesFixtures)).to.be.equals(56873));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 2 value', () => expect(lib.mapDataToMetric('ratings2', itunesFixtures)).to.be.equals(27077));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 3 value', () => expect(lib.mapDataToMetric('ratings3', itunesFixtures)).to.be.equals(91318));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 4 value', () => expect(lib.mapDataToMetric('ratings4', itunesFixtures)).to.be.equals(271370));
      it('expect the "transform.mapDataToMetric()" function to return the correct Rating 5 value', () => expect(lib.mapDataToMetric('ratings5', itunesFixtures)).to.be.equals(2086829));
    });
  });
});
