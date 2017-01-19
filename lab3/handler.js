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


const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports.reliablecounter = (event, context, callback) => {
  dynamodb.updateItem({
    TableName: 'counter',
    Key: {
      id: {S: 'test'},
    },
    UpdateExpression: 'ADD reliablecounter :c',
    ExpressionAttributeValues: {
      ":c": {
        N: "1"
      }
    }, 
    ReturnValues: 'ALL_NEW'
  }, function(error, result) {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify(error)
      };
      callback(null, response);
    } else {
      const response = {
        statusCode: 200,
        body: `counter ${result.Attributes.reliablecounter.N}`
      };
      callback(null, response);
    }
  });
};
