const Router = require("express").Router()
const verifytoken= require("../middlewear/auth")
const userpost = require("../controller/post")


Router.post("/add", verifytoken , userpost.addpost)
Router.get("/get", userpost.getpost)
Router.delete("/delete/:id", userpost.deletepost)
Router.put("/update/:id", userpost.updatePost)
Router.get("/getyourposts/:id", userpost.getspecificposts)


module.exports = Router

