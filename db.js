const mongoose = require("mongoose");

const connectToMongo = (mongoURI) => mongoose.connect(mongoURI);

module.exports = connectToMongo;
