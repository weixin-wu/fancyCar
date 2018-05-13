const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
var allCars = require("../models/car");
//move somewhere
var url =
  "mongodb://mongodb-stitch-storage-gyasn:Ag0JTRrjNwXsccsf@cluster0-shard-00-00-v1bxg.mongodb.net:27017,cluster0-shard-00-01-v1bxg.mongodb.net:27017,cluster0-shard-00-02-v1bxg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

exports.getAllCar = function (cb) {
  // MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  //   assert.equal(null, err);
  //   const db = client.db("test");
  //   db
  //     .collection("cars")
  //     .find({})
  //     .toArray(function (err, results) {
  //       var parsedResult = results.map(data => {
  //         delete data["_id"];

  //         return data;
  //       });
  //       cb(parsedResult);
  //     });
  //   client.close();
  // });

  
  cb(allCars.allCars);
};

exports.getAvailability = function (id, cb) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    const db = client.db("test");

    db.collection("cars").findOne({
      "id": parseInt(id, 10)
    }, (err, result) => {
      console.log(result)
      if (err != null) {
        cb({ err }, null);
      } else {
        let retVal = {
          id: result['id'],
          available: result['available']
        }
        cb(null, retVal);
      }
      client.close();

    });

  });

};
