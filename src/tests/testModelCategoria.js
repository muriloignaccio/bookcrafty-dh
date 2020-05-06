const { sequelize, Categoria } = require('../models');

Categoria.findAll({
  include: 'produtos'
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});

