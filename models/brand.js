var mongoose = require("mongoose"); //chua cac truong thuoc tinh

var Schema = mongoose.Schema;

var brandSchemas = new Schema({
  name: {
    type: String,
    require: true,
  },
  create_date: {
    type: String,
    require: true,
  },
});

var brand = mongoose.model("brand", brandSchemas);

module.exports = brand;
