const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require('dotenv')
dotenv.config()

const connectionString = process.env.CONNECTIONSTRING;
console.log(connectionString);

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

console.log("connected!")

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};