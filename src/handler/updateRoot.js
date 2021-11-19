 'use strict'

 const AWS = require('aws-sdk');
 const dynamoDb = new AWS.DynamoDB.DocumentClient();
 
 module.exports.updateRoot = (event, context, callback) => {

     const data = JSON.parse(event.body);
 
     //Validacion de campos ingresados de tipo string
     if( typeof data.gente !== 'string' || typeof data.planetas !== 'string' || typeof data.peliculas !== 'string' ||
     typeof data.especies !== 'string' || typeof data.naves_estelares !== 'string') {
         console.error('Ingresar valores requeridos');
         const response = {
             statusCode: 400,
             body: JSON.stringify({ "message":"Los valores ingreados son invalidos" })
         }
         return;
     }

    //Creando paramtros y sentencia de actualizacon  //':v': data.vehiculos,
     const params = {
         TableName: 'root',
         Key: {
             id: event.pathParameters.id
         },
         ExpressionAttributeValues: {
             ':g': data.gente,
             ':pl': data.planetas,
             ':pe': data.peliculas,
             ':e': data.especies,
             ':n': data.naves_estelares
         },
         UpdateExpression: 'set gente = :g, planetas = :pl, peliculas = :pe, especies = :e, naves_estelares = :n  '
     };
 
     dynamoDb.update(params, (error, data) => {
         if(error) {
             console.error(error);
             callback(new Error(error));
             return;
         }
 
         const response = {
             statusCode: 200,
             body: JSON.stringify(data.Item)
         };
 
         callback(null, response);
     });
 }