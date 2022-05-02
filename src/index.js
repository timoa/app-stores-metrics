const fs = require('fs');
const path = require('path');

const logger = require('./lib/logger');

// Check if there is a `apps.json` in the config folder
if (!fs.existsSync(path.resolve(__dirname, '../config/apps.json'))) {
  logger.error(
    'Please copy the file "src/examples/apps.json" => "config/apps.json"',
  );
  process.exit(1);
}

// Check if there is a `config.json` in the config folder
if (!fs.existsSync(path.resolve(__dirname, '../config/config.json'))) {
  logger.error(
    'Please copy the file "src/examples/metrics.json" => "config/config.json"',
  );
  process.exit(1);
}
