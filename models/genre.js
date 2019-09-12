var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = (
  {
    name: {type:String, required:true, max=100
      // , enum['fiction','non-fictioon', 'romance', 'history','biography','science','children','undefined'], default:'undefined'
    }
  }
  );

  GenreSchema
    .virtual('url')
    .get(function () {
      return `/catalog/genre/${this._id}`
    });

  module.exports = mongoose.model('Genre', GenreSchema);