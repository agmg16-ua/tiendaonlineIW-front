#!/bin/bash

# Descargar el archivo swagger.json
curl http://localhost:8080/v3/api-docs -o app_config/swagger.json

# Eliminar directorios existentes (si existen)
rm -rf src/generated/lewkin/models
rm -rf src/generated/lewkin/services

# Navegar al directorio de node_modules/.bin y ejecutar ng-openapi-gen
pushd node_modules/.bin/
./ng-openapi-gen -i ../../app_config/swagger.json -o ../../src/generated/lewkin/

# Regresar al directorio raíz del proyecto
popd
