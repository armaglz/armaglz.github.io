// this file makes the database connection, collects all the models
// and sets the associations
// other files can use this for database access by requiring it and
// assigning the exports

// assuming that this file (index.js) is in a subdirectory called models:
//  const models = require('./models');

// or (using deconstruction):
//  const { Person, PhoneNumber, Address, PersonAddress } = require('./models');

'use strict';

// database connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'pd_database.db'
});

// import models
const User = sequelize.import("./Users.js");
const Tree = sequelize.import("./Trees.js");
const Tag = sequelize.import("./Tags.js");
const Tag_Tree = sequelize.import("./Tags_Trees.js");

User.hasMany(Tree, { foreignKey: "user_id", as: "user_tree" });
Tree.belongsTo(User, { foreignKey: "id" });

module.exports = {
    User,
    Tree,
    Tag,
    Tag_Tree
};
