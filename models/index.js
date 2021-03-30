//import all needed files
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'author_id',
});

Blogpost.belongsTo(User, {
    foreignKey: 'author_id',
})

Blogpost.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'comment_id',
});

module.exports = { User, Blogpost, Comment };