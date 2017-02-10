var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Note = new Schema({
  title : { type: String, required: true },
  content : String,
  updated_at : Date
});

module.exports = mongoose.model( 'Note', Note );