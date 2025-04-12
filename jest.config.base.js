const { createDefaultPreset } = require('ts-jest');

/**
 * @type {import('jest').Config}
 */
const config = {
  ...createDefaultPreset({})
};

module.exports = config;
