var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'NBA' });
});
router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'NBA' });
})

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'NBA' });
});

router.get('/player', function(req, res, next) {
  res.render('player', { title: 'NBA' });
});
router.get('/teams', function(req, res, next) {
  res.render('teams', { title: 'NBA' });
});
router.get('/teamdetail', function(req, res, next) {
  res.render('teamdetail', { title: 'Express' });
});


module.exports = router;
