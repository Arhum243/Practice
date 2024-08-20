const post = require("../models/post")


let methods = {

    addpost: async (req, res) => {
        const userId = req.user.userid
       
        const { postName, discription } = req.body
        try {
            const postData = await post.create({

                postName,
                discription,
                postOwner: userId
            })
            const savedPost = postData.save()
            return res.status(201).json({
                message: savedPost,

            })
        } catch (error) {
            console.log("error", error)
            return res.status(500).send(error)
        }
    },

    deletepost: async (req, res) => {
        try {
            const { id } = req.params;
            const deleteData = await post.findByIdAndDelete({ _id: id })
            return res.status(201).json({
                message: "post Deleted"
            })
        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: error
            });

        }
    },

    getpost: async (req, res) => {
        try {
            const getData = await post.find({

            })
            return res.status(201).json({
                message: getData
            });
        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: error

            });

        }
    },

    updatePost: async (req, res) => {

        try {
            const { id } = req.params;
            const { postName, discription } = req.body;
            const update = await post.findByIdAndUpdate(
                id, {
                $set: {
                    postName,
                    discription
                }
            },
                { new: true }
            );
            return res.status(201).json({
                message: update
            });

        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: error
            });

        }
    },

    getspecificposts: async (req, res) => {

        try {
            const { id } = req.params;
            console.log("id", id)
            const getData = await post.find({ postOwner: id })
        return res.status(201).json({
                message: getData
            });
        } catch (error) {
            console.log("error", error)
            return res.status(500).json({
                message: error

            });

        }
    }
}

module.exports = methods