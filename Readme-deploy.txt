*** CREAR PROYECTOR DESDE CERO
1- Crear el proyecto mediente el serverles framework template 
   ejecutar el siguiente comando en el terminal
   > serverless create --template aws-nodejs --name serverless-star-wars-rest-api --path serverless-star-wars-rest-api

2.- Instalar dependencia de npm 
    > npm i uuid aws-sdk            (llave unica para guardar los registros en dynamo DB)
    > npm i xhr2  (para la peticion de las apis externas)


3.- Cuando se requiera realizar el deppliegue del serverless proyecto, 
    ejecutar el siguiente comando en el terminal 
    > serverless deploy

