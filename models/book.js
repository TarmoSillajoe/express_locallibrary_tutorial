var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BookSchema = new Schema(
  {
  title: {type:String, rquired:true},
  author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
  summary: {type: String, required: true},
  genre: [{type:Schema.Types.ObjectId, ref:'Genre'}]
  }
);

// Virtual for book's URL
BookSchema
  .virtual('url')
  .get(function () {
    return `/catalog/book/${this._id}`;
  });

  //Export model
  module.exports = mongoose.model('Book', BookSchema);