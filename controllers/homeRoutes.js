const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./api/commentRoutes');

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
      logged_in: req.session.logged_in,
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
router.get('/dashboard', withAuth, async (req,res) => {
  try {
    const userData = await Blogpost.findAll({
      where: {
        author_id: req.session.user_id
      },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    //serialize data so the template can read it
    const posts = userData.map(post => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in:true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

//route to get blogpost by id
router.get('/blogpost/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view their dashboard
    try {
      const blogpostPK = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            include: {
                model: User,
                attributes: ['username']
            }
        },
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      const blogpost = blogpostPK.get({ plain: true });
      res.render('blogpost', { 
        blogpost,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//route to edit/delete page
router.get('/edit/:id', withAuth, async (req,res)=> {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view edit page
    try {
      const blogpostPK = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            include: {
                model: User,
                attributes: ['username']
            }
        },
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      const blogpost = blogpostPK.get({ plain: true });
      res.render('edit-post', { 
        blogpost,
        logged_in: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
})

//route to create new post
router.get('/newpost', withAuth, async (req,res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view their dashboard
    try {
     res.render ('newpost', {logged_in: true})
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
})

//export router    
module.exports = router;
