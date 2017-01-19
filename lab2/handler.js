'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Hello Serverless!'
  };

  callback(null, response);
};

var counter = 0;

module.exports.counter = (event, context, callback) => {
  counter = counter + 1;
  const response = {
    statusCode: 200,
    body: `counter ${counter}`
  };

  callback(null, response);
};