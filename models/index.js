//import all needed files
const User = require('./User');
const Blogposts = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'blogpost_id',
});

Blogpost.belongsTo(User, {
    foreignKey: 'blogpost_id',
})

Blogpost.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'comment_id',
});

module.exports = { User, Blogpost, Comment };