const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const MandateSchema = mongoose.Schema({
  title: String,
  tag: String,
  tree: {
    type: Number,
    default: 2
  },
  si: String,
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
  priorityId: {
    type: Schema.Types.ObjectId,
    ref: 'Priority'
  },
  outputId: {
    type: Schema.Types.ObjectId,
    ref: 'Output'
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Mandate', MandateSchema);