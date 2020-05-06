module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('Categoria', {
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: DataTypes.STRING,
  }, {
    tableName: 'categoria',
    timestamps: false
  });

  categoria.associate = models => {
    categoria.hasMany(models.Produto, {
      foreignKey: 'fk_categoria',
      as: 'produtos'
    })
  };

  return categoria;
};