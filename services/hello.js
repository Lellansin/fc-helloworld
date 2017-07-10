'use strict';
require('dotenv').config();

exports.handler = (event, ctx, callback) => {
  callback(null, `Hello world! NODE_ENV: ${process.env.NODE_ENV}`);
};
