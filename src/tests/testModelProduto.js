const { sequelize, Produto } = require('../models');

Produto.findAll({
  include: [
    'categoria',
    'editora'
  ]
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});