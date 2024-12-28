#!/bin/bash

# Descargar el archivo swagger.json
curl http://localhost:8080/v3/api-docs -o app_config/swagger.json

# Eliminar directorios existentes (si existen)
rm -rf src/generated/lewkin/models
rm -rf src/generated/lewkin/services

# Generar modelos y servicios para Vue con openapi-generator-cli
npx openapi-generator-cli generate \
  -i app_config/swagger.json \
  -g javascript \
  -o src/generated/ \
  --skip-validate-spec

# Regresar al directorio raíz del proyecto
