# Article Management application is simple app contains 
# CRUD APIs to GET, PUT, POST and DELETE the article

## In the application there CRUD api's please use the below CURLs to access those.

Note: Change localhost to server ip if access from server

- Get All articles

```
curl --location --request GET 'http://localhost:5000/articles?pageNo=1' | json_pp
```

- Get article by id

```
curl --location --request GET 'http://localhost:5000/articles/3'
```

- Create article

```
curl --location --request POST 'http://localhost:5000/articles' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Make Docker image",
    "author":"Shalini",
    "language":"English"
}'
```

- Update article

```
curl --location --request PUT 'http://localhost:5000/articles/5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "language":"English"
}'
```

- Delete article

```
curl --location --request DELETE 'http://localhost:5000/articles/3'
```

