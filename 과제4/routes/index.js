var express = require('express');
var router = express.Router();

var userInfo = require('../database.json');
var numberOfUser = userInfo.length;

var session = require('express-session');

router.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
 }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/project1', function(req, res, next) {
  res.render('project1');
});

router.get('/project2', function(req, res, next) {
  res.render('project2');
});

router.get('/project3', function(req, res, next) {
  res.render('project3');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/failure', function(req, res, next) {
  res.render('failure');
});

router.get('/success', function(req, res, next) {
  var sess = req.session;
  
  if (sess.name) {
    res.render('success', {name: sess.name, level: sess.level});
  }
  else {
    res.redirect('/login');
  }
  });

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(){ 
    req.session;
    });
  res.redirect('/login');
});

router.post('/user-check', function(req, res, next) {
  var sess = req.session;
  for (var i=0; i<numberOfUser ; i++) {
    if (userInfo[i]['userid']==req.body.userid && userInfo[i]['password']==req.body.password) {
      sess.userid=userInfo[i]['userid'];
      sess.password=userInfo[i]['password'];
      sess.id=userInfo[i]['id'];
      sess.name=userInfo[i]['name'];
      sess.level=userInfo[i]['level'];
      res.redirect('/success');
    }
  }
  res.redirect('/failure');
})

module.exports = router;
