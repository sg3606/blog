const User = require('./User');
const Project = require('./Project');
const Reply = require('./Reply');

User.hasMany(Project, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Reply, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Project.hasMany(Reply, {
  foreignKey: 'project_id',
  onDelete: "cascade"
})

Reply.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Reply.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: "cascade"
});

module.exports = { User, Project, Reply };
