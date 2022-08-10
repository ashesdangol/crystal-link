const mongoose = require("mongoose")

const User = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    quote:{
        type: String
    }
},
{
    collection:'UserData'
}
)

const model = mongoose.model('UserData', User);

module.exports = model;