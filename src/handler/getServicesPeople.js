 'use strict'

 const AWS = require('aws-sdk');
 const dynamoDb = new AWS.DynamoDB.DocumentClient();
 
 module.exports.getServicesPeople = (event, context, callback) => {
    /*Realizar la cosulta al servicio externo */
    var idPeople =  event.pathParameters.id;

    /*var data = {
        "name": "Leia Organa", 
        "height": "150", 
        "mass": "49", 
        "hair_color": "brown", 
        "skin_color": "light", 
        "eye_color": "brown", 
        "birth_year": "19BBY", 
        "gender": "female", 
        "homeworld": "https://swapi.py4e.com/api/planets/2/", 
        "films": [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/2/", 
            "https://swapi.py4e.com/api/films/3/", 
            "https://swapi.py4e.com/api/films/6/", 
            "https://swapi.py4e.com/api/films/7/"
        ], 
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ], 
        "vehicles": [
            "https://swapi.py4e.com/api/vehicles/30/"
        ], 
        "starships": [], 
        "created": "2014-12-10T15:20:09.791000Z", 
        "edited": "2014-12-20T21:17:50.315000Z", 
        "url": "https://swapi.py4e.com/api/people/5/"
    };
*/
    global.XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    var data={};
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Completado!', xhr.response);
            data = xhr.response;
        } else {
            console.log('Ooops. ha ocurrido un error!');
        }
    };
    xhr.open('GET', 'https://swapi.py4e.com/api/people/'+idPeople+'/?format=json');
    xhr.send();

    /*Agregar el registro consultado a la BD Dynamo Tabla people*/
    /*Adaptar y transformar los modelos de la API de prueba. 
        Se tienen que mapear todos los nombres de atributos modelos 
        del inglés al español (Ej: name -> nombre).
        - En esta parte cuando creamos el JSON, le asignamos con el nombre de Ingles a Español
        con esto ya tenemos los registros en el DynamoDB en espeñol, pero simpre el request va en español */

     const params = {
         TableName: 'people',
         Item: {
             id: uuid.v1(),
             nombre: data.name,
             altura: data.height,
             masa: data.mass,
             color_pelo: data.hair_color,
             color_piel: data.skin_color,
             color_ojos: data.eye_color,
             anio_nacimiento: data.birth_year,
             genero: data.gender,
             trabajo: data.homeworld,
             peliculas: data.films,
             especie: data.species,
             vehiculos: data.vehicles,
             naves_espaciales: starships,
             creado: data.created,
             editado: data.edited,
             url: data.url 
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