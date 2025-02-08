const multer = require("multer");
const upload = multer();
const userApiController = require("../controller/api/user.controller");

const apiRouter = require("express").Router();

apiRouter.get("/", userApiController.userHome);
apiRouter.post("/add-new-user", upload.none(), userApiController.addNewUser);
module.exports = apiRouter;
