const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');


//route to create new blogpost
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      author_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a blogpost
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bpData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.user_id,
      },
    });

    if (!bpData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(bpData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update blog post
router.put('/:id', async (req, res) => {
    try {
      const updatedBP = await Blogpost.update({
        ...req.body,
      },
      {
       where: {
         id:req.params.id,
         author_id: req.session.user_id,
        }
      });
  
      res.status(200).json(updatedBP);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
