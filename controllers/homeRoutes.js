const router = require('express').Router();
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');

// Route to homepage
router.get('/', async (req, res) => {
  try {
    const bpData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: {exclude:['password']},
        },
      ],
    });

    //serialize data so the template can read it
    const blogposts = bpData.map((blogpost) => blogpost.get({ plain: true }));

    res.render('homepage', {
      blogposts,
      // Pass the logged in flag to the template
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to login page
router.get('/login', (req, res) => {
     //If a session exists, redirect the request to the homepage
      if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  

//route to dashboard
router.get('/dashboard', async (req,res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [
        {
          model: Blogpost,
        },
      ],
    });

    //serialize data so the template can read it
    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

//route to get blogpost by id
router.get('/blogpost/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  //if (!req.session.logged_in) {
   // res.redirect('/login');
 // } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const blogpostPK = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      const blogpost = blogpostPK.get({ plain: true });
      res.render('blogpost', { blogpost });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  //}
});

//export router    
module.exports = router;
