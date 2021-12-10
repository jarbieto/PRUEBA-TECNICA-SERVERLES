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
