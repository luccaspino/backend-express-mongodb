curl --request PATCH \
  --url http://localhost:3000/tasks/682120281d2458ebc7ebea2b \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTU3YmQ5ZWFkNjk4ZTlmY2JhZjQzNyIsImlhdCI6MTc0NzAwMDIxOCwiZXhwIjoxNzQ3MDAzODE4fQ.URS6plTmSAH9jUPkf2ciolishXloveb9H0DO4OiGtwY" \
  --data '{
    "description": " Fazer a compra e integrar com o desenvolvimento do site"
  }'

     // source ./requests/Tasks/update_some.sh