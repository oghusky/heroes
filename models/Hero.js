const mongoose = require("mongoose");
// mongo schema
const heroSchema = new mongoose.Schema({
  name: String,
  ability: String,
  powerLevel: String
});
// creates collection called Hero
module.exports = mongoose.model("Hero", heroSchema);
