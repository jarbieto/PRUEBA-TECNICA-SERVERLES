 'use strict'

 const AWS = require('aws-sdk');
 const dynamoDb = new AWS.DynamoDB.DocumentClient();
 
 module.exports.getRoot = (event, context, callback) => {
    /*Creando paramtro de busqueda en tabla */
     const params = {
         TableName: 'root',
         Key: {
             id: event.pathParameters.id
         }
     };
     /*Realizando busqueda en DynamoDB*/
     dynamoDb.get(params, (error, data) => {
         if(error) {
             console.error(error);
             callback(new Error(error));
             return;
         }
 
         const response = data.Item ? {
             statusCode: 200,
             body: JSON.stringify(data.Item)
         }: {
             statusCode: 404,
             body: JSON.stringify({ "message" : 'Task not found' })
         };
 
         callback(null, response);
     });
 }