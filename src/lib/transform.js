/**
 * Map data that come from the store scrapers
 * and map them to the metrics format
 *
 * @param {String} name
 * @param {Object} data
 * @returns
 */
function mapDataToMetric(name, data) {
  let metric = 0;
  if (name === 'ratings1') {
    metric = data.histogram['1'];
  } else if (name === 'ratings2') {
    metric = data.histogram['2'];
  } else if (name === 'ratings3') {
    metric = data.histogram['3'];
  } else if (name === 'ratings4') {
    metric = data.histogram['4'];
  } else if (name === 'ratings5') {
    metric = data.histogram['5'];
  }

  return metric;
}

module.exports = { mapDataToMetric };
