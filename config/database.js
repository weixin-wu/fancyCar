// var mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");
// const allCars = require("../app/models/car").allCars;
// const carAvailability = require("../app/models/car").carAvailability;
// var url =
//   "mongodb://mongodb-stitch-storage-gyasn:Ag0JTRrjNwXsccsf@cluster0-shard-00-00-v1bxg.mongodb.net:27017,cluster0-shard-00-01-v1bxg.mongodb.net:27017,cluster0-shard-00-02-v1bxg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

// //stub data
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
//   assert.equal(null, err);

//   const db = client.db("test");

//   const collection = db.collection("cars");

//   collection.drop();
//   // Insert some documents
//   collection.insertMany(allCars, (err, result) => {
//     assert.equal(err, null);
//     client.close();

//   });
// });

// module.exports = url;
