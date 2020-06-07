const mongoose = require("mongoose");

const CadasSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 9,
    minlength: 8,
  },
  age: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 3,
  },
});

module.exports = mongoose.model("Cadastro", CadasSchema);
