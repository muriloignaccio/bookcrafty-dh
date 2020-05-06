const { sequelize, Usuario } = require('../models');

Usuario.findAll({
  include: 'pedidos'
}).then(resposta => {
  console.log(resposta.map(r => r.toJSON()));
  sequelize.close();
});


