module.exports = (sequelize, DataTypes) => {
  const endereco = sequelize.define('Endereco', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    endereco: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cep: DataTypes.INTEGER,
    uf: DataTypes.STRING,
    fk_usuario: DataTypes.INTEGER

  }, {
    tableName: 'endereco',
    timestamps: false
  });

  endereco.associate = models => {
    endereco.belongsTo(models.Usuario, {
      foreignKey: 'fk_usuario',
      as: 'usuario'
    })
  }

  return endereco;
};