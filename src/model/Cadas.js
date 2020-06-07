const mongoose = require("mongoose");

const CadasSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
});

module.exports = mongoose.model("Cadastro", CadasSchema);
