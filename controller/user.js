const User = require("../models/user")
const jwt = require("jsonwebtoken")

let methods = {
    register: async (req, res) => {
        try {
            const { Name, email, password, Gender, dateOfBirth } = req.body
            const user = await User.create({
                Name,
                email,
                password,
                Gender,
                dateOfBirth
            })
            const userRegister = user.save()
            return res.status(200).json({ message: "user registered" })
        }
        catch (error) {
            console.log("error".error)
            return res.status(500).json({
                message: "error"
            });

        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const userlogin = await User.findOne({ email })
            if (!userlogin) {
                return res.status(401).json({
                    message: "user is unregistered"
                });
            }
            if (userlogin.password !== password) {
                return res.status(401).json({
                    message: "Invalid password"
                });

            }
                const accesstoken = jwt.sign({ userid: userlogin._id }, process.env.accesswebtoken, { expiresIn: "1h" })
            console.log("acesstoken", accesstoken)
          return  res.status(201).json({
                message: "login successfull", Name: userlogin.Name, email: userlogin.email,
                accesstoken: accesstoken

            });

        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: "error"
            });

        }

    },
    profile: async (req, res) => {
        try {
            const userData = await User.findOne({ _id: req.user.userid })


            return res.status(200).json({
                userData
            });
        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: "error"
            });
        }
    }
}

module.exports = methods