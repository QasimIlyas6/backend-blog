const userRoutes = require("./user.js");
const postRoutes = require('./post.js')

module.exports = function (app) {
  app.use("/api/user", userRoutes)
  app.use("/api/post", postRoutes)
};
