const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const ContractSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget'
  },
  fecId: {
    type: String,
  },
  contractorId: {
    type: Schema.Types.ObjectId,
    ref: 'Contractor'
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Contract', ContractSchema);