const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const ReleaseSchema = mongoose.Schema({

  quarter: {
    type: String,
  },
  budget: {
    type: String,
  },
  title: {
    type: String,
  },
  released: String,
  utilized: String,

  year: {
    type: String,
  },
  mda: {
    type: String,

  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Release', ReleaseSchema);