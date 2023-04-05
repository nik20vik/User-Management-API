// Requiring the express module for the app
const express = require("express");

/* We need dotenv module for the PORT and this will hide the details
Good practice is to use this when we work in collabrative env as we will only share the source code
And developers will make their own PORT or dotenv environment
*/
const dotenv = require("dotenv");

// Requiring morgan module to log out requests
const morgan = require("morgan");

/* Express body-parser is an npm module used to process data sent in an HTTP request body.
It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
Before the target controller receives an incoming request, these middleware routines handle it.
*/
const bodyparser = require("body-parser");

// Requiring the inbuilt path module for the views
const path = require("path");

// Requiring the connection.js for connecting the database to the application
const connectDB = require("./server/database/connection");

// We will run the express app
const app = express();

// Configuring the dotenv using the config.env file which has PORT value
dotenv.config({ path: "config.env" });

// We are creating the port for our application and by default it will take 8080
const PORT = process.env.PORT || 8080;

// Now, to log out the requests, we will use the morgan module with 'tiny' token
app.use(morgan("tiny"));

// Connecting to mongoDB
connectDB();

// Parse requests to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

/* Setting view engine :
As we are using ejs or embedded javascript template for dynamic HTML we will set the view engine with this.
Others are pug and HTML
*/
app.set("view engine", "ejs");

/* If we have a folder(suppose "ejs" folder) inside the views folder where all our files are located then we have to do
For path we need path module so we will require it above
*/
// app.set("views", path.resolve(__dirname, "views/ejs"));

// Loading all the assets inside the HTTP server :
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

/* For example: if we have style.css inside the assets/css
then we will give full path in the first args as
/css/style.css
*/

app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// Creating default route, "/" => root directory, req => request and res => response
// app.get("/", (req, res) => {
//   res.send("Crud Application");
// });

/* These all routes are moved to the server -> routes -> router.js file
For dedicated file only for routes

// To render the created index.ejs file in the view for HTML we will use the function res.render()
app.get("/", (req, res) => {
  // We did not need to specify the .ejs extension as we have already set the engine with ejs above
  res.render("index");
});

// To render the created add_user.ejs file
app.get("/add-user", (req, res) => {
  res.render("add_user");
});

// To render the created update_user.ejs file
app.get("/update-user", (req, res) => {
  res.render("update_user");
});

*/

// Load routes
app.use("/", require("./server/routes/router"));

// Listening to the server on the 3000 port :
/* app.listen(3000, () => {
  console.log(`Server is running on the http://localhost:${3000}`);
 });
*/

// Changing the 3000 with PORT as we have created above :
app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});
