var express = require('express');
const app = express();
var router = express.Router();
const userModel = require("./users")
const passport = require("passport");
const localStrategy = require('passport-local')
const mongoose = require('mongoose');

passport.use(new localStrategy(userModel.authenticate()))

  router.get('/', function(req, res, next) {
    res.render('homepage' );
  });
  router.get('/profile',isLoggedIn,  function(req, res, next) {
    res.render('profile' );
  });

router.get('/register', function(req, res, next) {
  res.render('register' );
});
// router.post('/register', function(req, res, next) {
//   const data =await new userModel({
//     fullname : req.body.fullname,
//     username : req.body.username,
//     email : req.body.email,
    
//   })
//   userModel.register(data, req.body.password)
//   .then(function(){
//     passport.authenticate("local")(req, res, function(){
//       res.redirect("/profile");
//     })
//   })
// });
router.post('/register', function(req, res) {
  const { fullname, username, email, password } = req.body;

  const newUser = new userModel({
    fullname: fullname,
    username: username,
    email: email
  });

  userModel.register(newUser, password, function(err, user) {
    if (err) {
      console.log("Registration Error:", err);
      return res.render('register', { error: "User already exists or invalid data." });
    }

    passport.authenticate("local")(req, res, function() {
      res.redirect("/profile");
    });
  });
});


router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post('/login',passport.authenticate("local",{
  successRedirect: "/profile" ,
  failureRedirect: "/login",
}));

router.get('/logout', function(req, res){
   req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
} )
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("/")
}

router.get('/collection', function(req, res) {
  res.render('collection');
});

router.get('/earring', function(req, res) {
  res.render('earring');
});
router.get('/earring-detail', function(req, res) {
  res.render('earring-detail');
});
router.get('/bangles', function(req, res) {
  res.render('bangles');
});
router.get('/bangles-detail', function(req, res) {
  res.render('bangles-detail');
});


router.get('/ring', function(req, res) {
  res.render('ring');
});

router.get('/ring-detail', function(req, res) {
  res.render('ring-detail');
});

router.get('/set', function(req, res) {
  res.render('set');
});

router.get('/set-detail', function(req, res) {
  res.render('set-detail');
});

router.get('/necklace', function(req, res) {
  res.render('necklace');
});
router.get('/necklace-detail', function(req, res) {
  res.render('necklace-detail');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/tika', function(req, res) {
  res.render('tika');
});

router.get('/tika-detail', function(req, res) {
  res.render('tika-detail');
});
router.get('/contact', function(req, res) {
  res.render('contact');
});
router.get('/craftsmanship', function(req, res) {
  res.render('craftsmanship');
});
router.get('/team', function(req, res) {
  res.render('team');
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// ✅ 4. POST route to save form data
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.render('contact', { success: true }); // optionally send success message
  } catch (err) {
    console.error("Contact Form Error:", err);
    res.status(500).send("Server Error");
  }
});


router.get('/payment', function(req, res) {
  res.render('payment');
});

  

module.exports = router;
