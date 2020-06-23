/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Tags_Trees', {
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tags_Trees',
        key: 'id'
      }
    },
    tree_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Trees',
        key: 'id'
      }
    }
  }, {
    tableName: 'Tags_Trees',
    timestamps: false
  });
};
