// Default options
const defaults = {
  apps: [
    {
      id: 'com.spotify.music',
      stores: [
        'itunes',
        'gplay',
      ],
      countries: [
        'gb',
      ],
    },
  ],
  metrics: {
    score: true,
    reviews: true,
    ratings: true,
    ratings1: true,
    ratings2: true,
    ratings3: true,
    ratings4: true,
    ratings5: true,
    currentVersionScore: true,
    currentVersionReviews: true,
    minInstalls: true,
    maxInstalls: true,
  },
};

/**
 * Get App Stores data based on the given app stores options
 *
 * @param {Object} opt
 */
function getAppStoresMetrics(opt) {
  return { ...defaults, ...opt };
  // Get enabled metrics
  // Call the scraper(s) for each store / app / country
  // Return the data
}

module.exports = { getAppStoresMetrics };
