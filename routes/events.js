var express = require('express');
var router = express.Router();
var Event = require('../models/Event');

/* GET Events listing. */
router.get('/', function(req, res, next) {
  Event.find(function(err, resp) {
	    if (err)
	        res.send(err);

	    res.json(resp);
	});
});

router.get('/:eventId', function(req, res, next) {
  Event.findById(req.params.eventId, function(err, Event) {
	    if (err)
	        res.send(err);
	    res.json(Event);
	});
});

router.put('/:eventId', function(req, res, next) {
  	Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {upsert:true}, function(err, Event) {
	    if (err)
	    	res.send(err);
		res.json(Event);
	});
});

router.post('/', function(req, res, next) {
	
	console.log(req.body);
  	var event = new Event(req.body);

	event.save(function(err) {
	  if (err) throw err;
	  res.json({
	  	success: true
	  });
	});
});



module.exports = router;
