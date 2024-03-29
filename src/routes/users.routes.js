const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UsersAvatarController();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = userRoutes;