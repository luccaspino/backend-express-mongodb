#!/bin/bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "Ariell",
    "password": "Senha@12345",
    "email": "ariel@hotmail.com"
  }'

  // source ./requests/Register/Sucess.Reg.sh
