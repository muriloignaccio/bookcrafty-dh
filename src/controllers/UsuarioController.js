const { Usuario } = require('../models')

module.exports = {
  index: async (req, res) => {
    const users = await Usuario.findAll({
      include: ['enderecos', 'pedidos']
    });

    return res.send(users);
  },

  show: async (req, res) => {
    const { id } = req.params;

    const user = await Usuario.findByPk(id, {
      include: ['enderecos', 'pedidos']
    });

    if (!user) {
      return res.status(400);
    }

    return res.send(user)
  },

  store: (req, res) => {
    const { nome, email, senha } = req.body;

    const newUser = Usuario.Create({
      nome,
      email,
      senha
    });

    return res.send(newUser);
  }
};