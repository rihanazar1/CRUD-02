const express = require("express")
const userRouter = express.Router()
const userController = require("../controllers/user.controller")

userRouter.post("/create", userController.createController)

userRouter.get("/showUsers", userController.showUserController)

userRouter.put("/update/:id", userController.updateUserController) 

userRouter.delete("/delete/:id", userController.deleteController) 

module.exports = userRouter