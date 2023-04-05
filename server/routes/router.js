// Getting the express module
const express = require("express");

// Will not do this as it will create a new app
// const app = express();

// Instead use the express.Router() function, and change app.get() to router.get()
const route = express.Router();

// Requiring render.js file
const services = require("../services/render");

// Requiring controller.js file
const controller = require("../controller/controller");

/*
This is changed as we have created another render.js file to maintain rendering of pages
To render the created index.ejs file in the view for HTML we will use the function res.render()

route.get("/", (req, res) => {
  // We did not need to specify the .ejs extension as we have already set the engine with ejs above
  res.render("index");
});

// To render the created add_user.ejs file
route.get("/add-user", (req, res) => {
  res.render("add_user");
});

// To render the created update_user.ejs file
route.get("/update-user", (req, res) => {
  res.render("update_user");
});

*/

/* 
    @description Root route
    @method GET/add-user
*/
route.get("/", services.homeRoutes);

/* 
    @description add-user route
    @method GET/add-user
*/
route.get("/add-user", services.add_user);

/* 
    @description update-user route
    @method GET/update-user
*/
route.get("/update-user", services.update_user);

// Creating API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);

// We will use query parameter instead of creating another route
// route.get("/api/users/:id", controller.findUser);

route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

// Exporting the routes
module.exports = route;
