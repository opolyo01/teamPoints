var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var kidSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, min: 3, max: 18 },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Kid = mongoose.model('Kid', kidSchema);

// make this available to our Kids in our Node applications
module.exports = Kid;