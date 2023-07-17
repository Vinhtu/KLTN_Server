var mongoose = require("mongoose"); //chua cac truong thuoc tinh

var Schema = mongoose.Schema;

var categorySchemas = new Schema({
  code: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  show: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  create_date: {
    type: String,
    require: true,
  },
});

var category = mongoose.model("category", categorySchemas);

module.exports = category;
