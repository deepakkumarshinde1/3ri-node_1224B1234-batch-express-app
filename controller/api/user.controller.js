const UserModel = require("../../model/user.model");

const userHome = (request, response) => {
  response.send({
    status: true,
    message: "Welcome to user api",
  });
};

const addNewUser = (request, response) => {
  let data = request.body;
  response.send({
    data,
    status: true,
  });
};
const getUserList = async (request, response) => {
  try {
    let list = await UserModel.find();
    response.send({
      status: true,
      list,
    });
  } catch (error) {
    response.send({
      status: false,
      message: error.message,
    });
  }
};
module.exports = {
  userHome,
  addNewUser,
  getUserList,
};
