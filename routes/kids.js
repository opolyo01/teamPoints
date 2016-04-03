var express = require('express');
var router = express.Router();
var Kid = require('../models/kid');

/* GET Kids listing. */
router.get('/', function(req, res, next) {
  Kid.find(function(err, resp) {
	    if (err)
	        res.send(err);

	    res.json(resp);
	});
});

router.get('/:kidId', function(req, res, next) {
  Kid.findById(req.params.kidId, function(err, kid) {
	    if (err)
	        res.send(err);
	    res.json(kid);
	});
});

router.put('/:kidId', function(req, res, next) {
  	Kid.findOneAndUpdate({_id: req.params.kidId}, req.body, {upsert:true}, function(err, kid) {
	    if (err)
	    	res.send(err);
		res.json(kid);
	});
});

router.post('/', function(req, res, next) {
  	var kid = new Kid(req.body);

	kid.save(function(err) {
	  if (err) throw err;
	  res.json({
	  	success: true
	  });
	});
});



module.exports = router;
