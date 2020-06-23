/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Trees', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pic_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    tableName: 'Trees',
    timestamps: false
  });
};
