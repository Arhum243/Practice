const mongoose = require("mongoose")
const { stringify } = require("querystring")
const Schema = mongoose.Schema

var User = new Schema({

"Name":{
    type:String,
    required:false
},
"email":{
    type:String,
    required:false
},
"password":{

    type:String,
    required:false
},
"Gender":{
    type:String,
    required:false

},
"dateOfBirth":{type:String,required:false}






})
module.exports = mongoose.model("User",User)