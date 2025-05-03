curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "Ariel.Menezes",
    "password": ""
    }'

      // source ./requests/Login/Error.login.password.sh