const Router = require("express").Router()
const middlewear = require("../middlewear/auth")


const usercontroller = require("../controller/user")
const verifytoken = require("../middlewear/auth")



Router.post("/register",usercontroller.register)
Router.post("/login",usercontroller.login)
Router.get("/profile",verifytoken, usercontroller.profile)



module.exports = Router