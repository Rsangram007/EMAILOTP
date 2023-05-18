const Routes = require("express").Router()
const controller = require("../Controller/userController");

// Routes
Routes.post("/register", controller.userregister);
Routes.post("/sendotp", controller.userOtpSend);
Routes.post("/login", controller.userLogin);

module.exports = Routes;