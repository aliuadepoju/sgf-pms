const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const ContractorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  cacNo: {
    type: String,
  },

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Contractor', ContractorSchema);