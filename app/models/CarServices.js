const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
var allCars = require("../models/car");
var url =
  "mongodb://mongodb-stitch-storage-gyasn:Ag0JTRrjNwXsccsf@cluster0-shard-00-00-v1bxg.mongodb.net:27017,cluster0-shard-00-01-v1bxg.mongodb.net:27017,cluster0-shard-00-02-v1bxg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

exports.getAllCar = function(cb) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db("test");
    db
      .collection("cars")
      .find({})
      .toArray(function(err, results) {
        var parsedResult = results.map(data => {
          delete data["_id"];

          return data;
        });
        cb(parsedResult);
      });
    client.close();
  });
};

exports.getAvailability = function(_id, cb) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db("test");
    db.collection("availibity").findOne({ id: 1 }, (err, result) => {
      if (err != null) {
        cb({ err }, null);
      } else {
        delete result["_id"];
        cb(null, result);
      }
    });
    client.close();
  });
};
