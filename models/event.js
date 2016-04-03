var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventSchema = new Schema({
  kidName: { type: String, required: true },
  categoryName: { type: String, required: true },
  points: { type: Number, required: true },
  created_at: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('Event', eventSchema);

// make this available to our Events in our Node applications
module.exports = Event;