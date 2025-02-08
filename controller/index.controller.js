const home = (request, response) => {
  response.render("index", {
    title: "Node js with express",
  });
};

const dashboard = (request, response) => {
  response.render("dashboard", {
    title: "Dashboard",
    user: "Admin",
  });
};

const checkLogin = (request, response) => {
  let data = request.body;
  // check in db
  let isValid = true;
  if (isValid === true) {
    response.redirect("/dashboard");
  } else {
    response.redirect("/");
  }
  // response.send({
  //   message: "Its Working",
  //   data,
  // });
};

module.exports = {
  home,
  dashboard,
  checkLogin,
};
