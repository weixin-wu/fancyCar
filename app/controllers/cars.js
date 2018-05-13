const getAllCar = require("../models/CarServices").getAllCar;
const getAvailability = require("../models/CarServices").getAvailability;
exports.allCars = (req, res) => {
  getAllCar(results => {
    res.json(results);
  });
};

exports.availability = (req, res) => {
  const id = req.query.id;
  if (id != null) {
    getAvailability(id, (err, result) => {
        var statusCode = err == null ? 200 : 500;
        var response = err == null ? result : err;
        res.status(statusCode).json(response)
    });
  } else {
    res.json({ available: "Unavailable" });
  }
};

