const userModel = require("../model/user.model")

module.exports.createController = async (req, res) => {
    try {
        const {image, name, email, age, bio} = req.body
        const createUser = await userModel.create({
            image: image,
            name: name,
            email: email,
            age: age,
            bio: bio
        })

        res.send({createUser})

    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.showUserController = async (req, res) => {
    try {
        const showUsers = await userModel.find()
        res.send({showUsers})
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.updateUserController = async (req, res) => {
    try {
        const {id} = req.params
        const {image, name, email, age, bio} = req.body

        const updateUser = await userModel.findByIdAndUpdate(id,
            {
                image: image,
                name: name,
                email: email,
                age: age,
                bio: bio
            },
            {new: true})

            res.json({updateUser})
            console.log(updateUser)
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}


module.exports.deleteController = async (req, res) => {
    try {
        const {id} = req.params

        await userModel.findByIdAndDelete(id)

        res.json({message : "user deleted successfully"})
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}