#!/bin/bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "usuario_sena_fraca",
    "password": "",
    "email": "senha.fraca@example.com"
  }'

      // source ./requests/Register/error_invalid_password.sh
