//import all needed files
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'author_id',
});

Blogpost.belongsTo(User, {
    foreignKey: 'author_id',
    onDelete:"CASCADE"
})

Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

module.exports = { User, Blogpost, Comment };