curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser",
    "password": "securepassword123",
    "email": "zecapagodinho@gmail.com"
    }'

// source ./requests/examples/POST_Register_User.sh