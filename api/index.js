const { server } = require('stremio-addon-sdk');
const addonInterface = require('../index.js');

module.exports = server(addonInterface, { port: process.env.PORT });
