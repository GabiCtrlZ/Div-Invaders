const mongoose = require('mongoose')
const Schema = mongoose.Schema
const highScoreSchema = new Schema({
    name: String,
    score: Number,
    time: Number  
})

const HighScore = mongoose.model('Scores', highScoreSchema)

module.exports = HighScore