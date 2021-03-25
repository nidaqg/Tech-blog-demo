//import all needed files
const User = require('./User');
const Blogposts = require('./Blogposts');
const Comment = require('./Comment');

User.hasMany(Blogposts, {
    foreignKey: 'blogpost_id',
});

Blogposts.belongsTo(User, {
    foreignKey: 'blogpost_id',
})

Blogposts.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blogposts, {
  foreignKey: 'comment_id',
});

module.exports = { User, Blogposts, Comment };