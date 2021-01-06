var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  orderate: { type: String},

  region:    { type: String},

  name: { type: String },

  product: { type: String },

  quantity: { type: String },

  unitcost: {type : String},

  total: {type: String} 

});

module.exports = mongoose.model('Products', productSchema);