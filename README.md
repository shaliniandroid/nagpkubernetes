# Article Management application is app contains CRUD APIs to GET, PUT, POST and DELETE the article

## In the application there CRUD api's please use the below CURLs to access those.

### Code Repo : https://github.com/shaliniandroid/nagpkubernetes
### Docker Hub URL : https://hub.docker.com/r/shalinipuri/articlesmanagement/tags
### Service API Point : http://35.223.153.230:5000/
### Video Recording Url : https://drive.google.com/file/d/1-1lgb-6HT2qtmYvlPaXBuD-x1a0sHozt/view?usp=drivesdk

- Get All articles

```
GET  http://35.223.153.230:5000/articles?pageNo=1
```

- Get article by id

```
- GET  http://35.223.153.230:5000/articles/3
```

- Create article

```
POST  http://35.223.153.230:5000/articles
Body raw : {
    "title": "Make Docker image",
    "author":"Shalini",
    "language":"English"
}'
```

- Update article

```
PUT  http://35.223.153.230:5000/articles/5
Body raw '{
    "language":"English"
}'
```

- Delete article

```
DELETE http://34.71.11.146:5000/articles/3
```

