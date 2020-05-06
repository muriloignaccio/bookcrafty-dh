const { sequelize, Endereco } = require('../models');

Endereco.findAll({
  include: 'usuario'
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});

