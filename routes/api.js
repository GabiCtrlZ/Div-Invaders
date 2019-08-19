const express= require('express')
const router = express.Router()
const path = require('path')
const HighScore = require('../mongoose/db')

router.get('/try', function(req, res){
    console.log('Someone is playing the game')
    res.sendFile(path.join(__dirname + '/..'+'/dist/Html/index.html'))
})

router.get('/highGlobal', function(req, res){
    HighScore.find({}, {name: 1, score: 1, time: 1, _id: 0}).sort({score: -1}).limit(5).exec(function(err, response){
        console.log('High Score Request Has Been Made')
        res.json(response)
    })
})

router.post('/sendScore', function(req, res){
    let data = req.body
    if (data.name.length > 6 || data.score.length > 3 || data.time.length > 4){
        data = ''
        console.log('data was not right')
        return res.end()
    }
    const d = new HighScore(data)
    d.save()
    console.log(d + "was saved")
    res.end()
})
module.exports = router