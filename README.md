# PRUEBA-TECNICA-SERVERLES
PRUEBA-TECNICA-SERVERLES

# imagenes de depligue y pruebas
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_1.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_2.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_3.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_4.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_5.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_6.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_7.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_8.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_9.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_10.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_11.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_12.png?raw=true "Optional Title")
![Alt text](https://github.com/jarbieto/PRUEBA-TECNICA-SERVERLES/blob/main/evidencia-ejecucion-pruebas-despligue/Screenshot_13.png?raw=true "Optional Title")


# DEPLIEGUE DEL SERVICIO SERVERLES 
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


# ENDPOINTS Y ALGUNOS DATOS DE PRUEBA 
api keys:
  None
endpoints:
  * createRoot: serverless-star-wars-rest-api-dev-createRoot
        POST - https://713abgvpyl.execute-api.us-east-1.amazonaws.com/dev/root/createRoot
            REQUEST= {
                "people": "https://py4e.com/api/gente/",
                "planets": "https://py4e.com/api/planetas/",
                "films": "https://py4e.com/api/peliculas/",
                "species": "https://py4e.com/api/especies/",
                "vehicles": "https://py4e.com/api/vehiculos/",
                "starships": "https://py4e.com/api/naves espaciales/"
            }

  * listRoots: serverless-star-wars-rest-api-dev-listRoots
        GET - https://713abgvpyl.execute-api.us-east-1.amazonaws.com/dev/root/listRoots

  * getRoot: serverless-star-wars-rest-api-dev-getRoot
        GET - https://713abgvpyl.execute-api.us-east-1.amazonaws.com/dev/root/getRoot/{id}

  * updateRoot: serverless-star-wars-rest-api-dev-updateRoot
        PUT - https://713abgvpyl.execute-api.us-east-1.amazonaws.com/dev/root/updateRoot/{id}
            REQUEST= {
                    "peliculas": "https://xd.py4e.com/api/films/",
                    "naves_estelares": "https://xd.py4e.com/api/starships/",
                    "planetas": "https://xd.py4e.com/api/planets/",
                    "especies": "https://xd.py4e.com/api/species/",
                    "gente": "https://xd.py4e.com/api/people/"
                }

functions:
  *createRoot
  *listRoots
  *getRoot
  *updateRoot


layers:
  None


