#!/bin/bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "usuario_email_errado",
    "password": "Senha@123",
    "email": "nao-e-um-email-valido"
  }'

      // source ./requests/Register/error_invalid_email.sh
