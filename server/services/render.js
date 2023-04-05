// Requiring axios module to get the data from the database
const axios = require("axios");

// Adding routes for the browser
exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  // We have to render the data as well so we will shift the render in the end inside the axios with userdata
  axios
    .get("/api/users/", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });

  // res.render("update_user");
};
