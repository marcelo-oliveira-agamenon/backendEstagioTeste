const Cadas = require("../model/Cadas");

module.exports = {
  async show(req, res) {
    const AllCadas = await Cadas.find({});

    return res.json(AllCadas);
  },

  async store(req, res) {
    const { name, phone, age } = req.body;

    const OneCadas = await Cadas.create({
      name: name,
      phone: phone,
      age: age,
    });

    return res.json("Success!");
  },
};
