const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./routes/api')
const port = 3000
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/highScoreDB', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/', api)

app.listen(process.env.PORT || port, function(){
    console.log(`Running on port ${port}`)
})