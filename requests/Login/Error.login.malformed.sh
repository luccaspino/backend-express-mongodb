curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "password": "Senha@4231",
     "username": "Ariel.Menezes"
    }'

      // source ./requests/Login/Error.login.malformed.sh
