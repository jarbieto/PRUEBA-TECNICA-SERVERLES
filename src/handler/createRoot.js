
'use strict'

 const AWS = require('aws-sdk');
 const uuid = require('uuid');
 
 const dynamoDb = new AWS.DynamoDB.DocumentClient();
 
 module.exports.createRoot = (event, context, callback) => {
 
     //const datetime = new Date().toISOString();
     //Recuperamos el request que enviamos
     const data = JSON.parse(event.body);
 
     //Validacion de campos ingresados de tipo string
     if( typeof data.people !== 'string' || typeof data.planets !== 'string' || typeof data.films !== 'string' ||
     typeof data.species !== 'string' || typeof data.starships !== 'string') {
         console.error('Ingresar valores requeridos');
         const response = {
             statusCode: 400,
             body: JSON.stringify({ "message":"Los valores ingreados son invalidos" })
         }
         return;
     }
 
  /*Adaptar y transformar los modelos de la API de prueba. 
  Se tienen que mapear todos los nombres de atributos modelos 
  del inglés al español (Ej: name -> nombre).
  - En esta parte cuando creamos el JSON, le asignamos con el nombre de Ingles a Español
    con esto ya tenemos los registros en el DynamoDB en espeñol, pero simpre el request va en español */
     const params = {
         TableName: 'root',
         Item: {
             id: uuid.v1(),
             gente: data.people,
             planetas: data.planets,
             peliculas: data.films,
             especies: data.species,
             vehiculos: data.vehiculos,
             naves_estelares: data.starships
         }
     };
 
     dynamoDb.put(params, (error, data) => {
         if(error) {
             console.error(error);
             callback(new Error(error));
             return;
         }
 
         const response = {
             statusCode: 201,
             body: JSON.stringify(data.Item)
         };
 
         callback(null, response);
     });
 }