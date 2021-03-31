const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//route to create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content:req.body.content,
      user_id: req.session.user_id,
      blogpost_id: req.body.id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
