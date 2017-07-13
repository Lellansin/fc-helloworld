'use strict';
const path = require('path');
const fs = require('fs');

exports.handler = (event, ctx, callback) => {
  console.log('invoke file!');
  callback(null, {
    isBase64Encode: false,
    statusCode: 200,
    headers: {
      'Content-Type': 'application/javascript'
    },
    body: fs.readFileSync(path.resolve(__dirname, './file.js'))
  });
};
