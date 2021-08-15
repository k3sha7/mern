const mongoose = require('mongoose')        

const diarySchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
        
    },
    date : {
        type : Date,
        required: true
    },
    username : {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Diary',diarySchema)