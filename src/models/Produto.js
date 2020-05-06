module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id_produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    fk_categoria: DataTypes.INTEGER,
    imagem: DataTypes.STRING,
    fk_editora: DataTypes.INTEGER
  }, {
    tableName: 'produto',
    timestamps: false
  });

  Produto.associate = models => {

    Produto.belongsTo(models.Categoria, {
      foreignKey: 'fk_categoria',
      as: 'categoria'
    });

    Produto.belongsTo(models.Editora, {
      foreignKey: 'fk_editora',
      as: 'editora'
    })
  };

  return Produto;
};