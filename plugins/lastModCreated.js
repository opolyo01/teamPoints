module.exports = exports = function lastModifiedCreatedPlugin (schema, options) {
  
  schema.add({ 
  	created_at: Date,
  	updated_at: Date
  });
  
  schema.pre('save', function (next) {
	var currentDate = new Date();
	this.updated_at = currentDate;
	if (!this.created_at){
		this.created_at = currentDate;
	}
	next();
  });
  
  if (options && options.index) {
    schema.path('lastMod').index(options.index);
  }
};