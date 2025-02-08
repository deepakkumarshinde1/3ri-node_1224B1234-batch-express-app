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
module.exports = {
  userHome,
  addNewUser,
};
