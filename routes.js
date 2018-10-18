const routes = require("next-routes");
// routes.add(name, 'url', 'folder-name/file-name')
module.exports = routes()
  .add("home", "/", "/homePage")
  .add("enterprise", "/enterprise", "/homePage")
  .add("preferred-customers", "/preferred-customers", "/homePage")
  .add("investors", "/investors", "/homePage")
  .add("post", "/post/:id", "productDetail");
