#!/bin/bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
  "password": "Senha@123",
    "username": "",
    "email": "email.faltando.usuario@example.com"
  }'

      // source ./requests/Register/error_malformed.sh
