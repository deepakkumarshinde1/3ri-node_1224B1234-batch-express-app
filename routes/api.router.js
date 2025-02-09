const multer = require("multer");
const upload = multer();
const userApiController = require("../controller/api/user.controller");

const apiRouter = require("express").Router();

apiRouter.get("/", userApiController.userHome);
apiRouter.post("/add-new-user", upload.none(), userApiController.addNewUser);
apiRouter.get("/user-list", userApiController.getUserList);
module.exports = apiRouter;
