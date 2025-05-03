curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "Ariel",
    "password": "Senha@1234"
    }'

      // source ./requests/Login/Sucess.login.sh
