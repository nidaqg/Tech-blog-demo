const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//route to create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blogpost_id: req.session.blogpost_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No Comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a comment
router.put('/:id', async (req, res) => {
    try {
      const updatedComment = await Comment.update({
        ...req.body,
      },
      {
       where: {
         id:req.params.id,
         author_id: req.session.user_id,
        }
      });
  
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
