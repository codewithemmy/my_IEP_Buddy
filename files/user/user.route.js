const { uploadManager } = require("../../utils/multer")
const { checkSchema } = require("express-validator")
const userRoute = require("express").Router()
const { isAuthenticated } = require("../../utils")

//controller files
const {
  createUserController,
  userLoginController,
} = require("../user/controllers/user.controller")
const { generateImageController } = require("./controllers/profile.controller")

//routes
userRoute.route("/").post(createUserController)
userRoute.route("/login").post(userLoginController)
userRoute.route("/generate").post(generateImageController)

module.exports = userRoute
