curl --request GET \
  --url 'http://localhost:3000/secureExampleRoute/' \
  --header 'Authorization: Bearer invalidatoken'

      // source ./requests/Protected/Error.prot.sh