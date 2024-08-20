const mongoose = require("mongoose")
const user = require("./user");
const { type } = require("os");
const Schema = mongoose.Schema

const post = new Schema({

postName:{
type:String,
required:false

},
discription:{
type:String,
required:false

},
postOwner:{
type:Schema.Types.ObjectId,
ref:user

}




});
module.exports = mongoose.model("post",post)