/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    full_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    institution: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });
};
