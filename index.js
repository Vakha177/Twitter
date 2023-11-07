const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000 ; 


app.use(express.json())
app.use(require('./router/user.router'))
app.use(require('./router/post.router'))
app.use(require('./router/comment.router'))
app.use(require('./router/lyke.controller'))

mongoose.connect('mongodb+srv://sheikh2003:Seida59522@cluster0.jqbmwip.mongodb.net/twitter')
.then(() => console.log('Успешное подключение с mongoDb'))
.catch(() => console.log('Не удалось подключиться к MongoDb'))

app.listen(4000 , () => console.log('Сервер запущен'))