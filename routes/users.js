var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, resp) {
	    if (err)
	        res.send(err);

	    res.json(resp);
	});
});

router.get('/:userId', function(req, res, next) {
  User.findById(req.params.userId, function(err, user) {
	    if (err)
	        res.send(err);
	    res.json(user);
	});
});

router.put('/:userId', function(req, res, next) {
  	User.findOneAndUpdate({_id: req.params.userId}, req.body, {upsert:true}, function(err, user) {
	    if (err)
	    	res.send(err);
		res.json(user);
	});
});

router.post('/', function(req, res, next) {
	console.log(req.body);
  	var user = new User(req.body);

	user.save(function(err) {
	  if (err) throw err;
	  res.json({
	  	success: true
	  });
	});
});



module.exports = router;
