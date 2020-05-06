const { sequelize, Pedido } = require('../models');

Pedido.findAll({
  include: 'usuario'
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});

