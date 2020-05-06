module.exports = (sequelize, DataTypes) => {
  const pedido = sequelize.define('Pedido', {
    id_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    status: DataTypes.STRING,
    fk_usuario: DataTypes.STRING
  }, {
    tableName: 'pedido',
    timestamps: false
  });

  pedido.associate = (models) => {
    pedido.belongsTo(models.Usuario, {
      foreignKey: 'fk_usuario',
      as: 'usuario'
    });
  }

  return pedido;
};