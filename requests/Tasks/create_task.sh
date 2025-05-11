curl --request POST \
  --url http://localhost:3000/tasks \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTU3YmQ5ZWFkNjk4ZTlmY2JhZjQzNyIsImlhdCI6MTc0NzAwMDIxOCwiZXhwIjoxNzQ3MDAzODE4fQ.URS6plTmSAH9jUPkf2ciolishXloveb9H0DO4OiGtwY" \
  --data '{
    "title": "Florir - App 2.0 ",
    "description": "WEB - DEV FRONTBACK",
    "completed": false
  }'

  // source ./requests/Tasks/create_task.sh