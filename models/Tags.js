/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Tags', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Tags',
    timestamps: false
  });
};
