'use strict';
require('dotenv').config();

exports.handler = (event, ctx, callback) => {
  console.log('invoke fc_helloworld!');
  callback(null, `Hello world! NODE_ENV: ${process.env.NODE_ENV}`);
};
