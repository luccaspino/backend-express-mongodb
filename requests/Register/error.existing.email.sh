#!/bin/bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "usuario_existente",
    "password": "Senha@123",
    "email": "zecapagodinho@gmail.com"
  }'

    // source ./requests/Register/error.existing.email.sh
