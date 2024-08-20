const Router = require("express").Router()

const userdata  = require("./user")
const userpost = require("./post")


Router.use("/user",userdata)
Router.use("/post",userpost)

module.exports = Router