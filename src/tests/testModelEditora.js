const { sequelize, Editora } = require('../models');

Editora.findAll({
  include: 'produtos'
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});

