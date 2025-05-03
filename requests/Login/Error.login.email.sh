curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "Ariel.Menezes",
    "password": "Senha@1234"
    }'

      // source ./requests/Login/Error.login.email.sh