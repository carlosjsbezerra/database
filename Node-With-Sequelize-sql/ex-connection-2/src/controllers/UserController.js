const Anuncio = require('../models/Anuncio');

module.exports = {
  async index(req, res) {
    const anuncio = await Anuncio.findAll();

    return res.json(anuncio);
  },

  async store(req, res) {
    const { titulo, descricao } = req.body;

    const anuncio = await Anuncio.create({ titulo, descricao });

    return res.json(anuncio);
  }
}