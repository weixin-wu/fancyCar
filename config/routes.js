var route = require("../app/controllers/cars");

module.exports = function(app) {
  app.get("/cars", route.allCars);
  app.get("/availability", route.availability);
};
