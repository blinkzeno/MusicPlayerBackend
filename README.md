# MusicPlayerBackend

### create development environment(python)
```python
 python3 -m venv venv
```

 ### activate venv
 ```python
 source venv/bin/activate
 ```
 ### install dependencies
 ```python
 pip install -r requirements.txt
 ```


## install dependencies(node)

```npm
npm install
```

### install mongoDB

 **create .env file**

**add port variable**
 (ex: PORT=3000)

**add database variable**
(ex: MONGODB_URI=mongodb://localhost:27017/MusicPlayerBackend)


### start server
```npm
npm start
```

## app route
 -> http://localhost:3000/api/

 ## user route
 -> http://localhost:3000/api/users/register

 -> http://localhost:3000/api/users/login
 
***create a user***

   email: admin@gmail.com

   password: admin

   username: admin

## musics route
 -> http://localhost:3000/api/musics (GET all musics)

 -> http://localhost:3000/api/musics/id (GET a music)

 ->http://localhost:3000/api/musics/user/id (GET all musics by userId)
 
 -> http://localhost:3000/api/musics/upload (POST create a music)
 
 **(header: user-id)**
 **(body: audioFile{file})**

 -> http://localhost:3000/api/musics/update/id (UPDATE a music)

 -> http://localhost:3000/api/musics/delete/id (DELETE a music)

-> http://localhost:3000/api/musics/search/query (SEARCH a music)
