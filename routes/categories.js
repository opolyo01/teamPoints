var express = require('express');
var router = express.Router();
var Category = require('../models/Category');

/* GET Categorys listing. */
router.get('/', function(req, res, next) {
  Category.find(function(err, resp) {
	    if (err)
	        res.send(err);

	    res.json(resp);
	});
});

router.get('/:categoryId', function(req, res, next) {
  Category.findById(req.params.categoryId, function(err, Category) {
	    if (err)
	        res.send(err);
	    res.json(Category);
	});
});

router.put('/:categoryId', function(req, res, next) {
  	Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {upsert:true}, function(err, Category) {
	    if (err)
	    	res.send(err);
		res.json(Category);
	});
});

router.post('/', function(req, res, next) {
	console.log(req.body);
  	var category = new Category(req.body);

	category.save(function(err) {
	  if (err) throw err;
	  res.json({
	  	success: true
	  });
	});
});



module.exports = router;
