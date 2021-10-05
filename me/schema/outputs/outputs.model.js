const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const OutputSchema = mongoose.Schema({
  title: String,
  tag: String,
  ref: {
    type: Number,
    default: 0,
  },
  baseline: String,
  tree: Number,
  actual: {
    type: String,
    default: '0'
  },
  actual2021: {
    type: String,
    default: '0'
  },
  unitType: {
    type: String,
    default: 'Append'
  },
  outputType: {
    type: String,
    default: 'result'
  },
  type: {
    type: String,
    default: 'quan'
  },
  unit: {
    type: String,

  },
  target: String,
  targets: String,
  aggregation: String,
  rt: {
    type: String,
    default: '#'
  },
  currency: {
    type: String,
    default: '₦'
  },
  active: {
    type: Number,
    default: 0
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
  indicatorId: {
    type: Schema.Types.ObjectId,
    ref: 'Indicator'
  },
  datasource: {
    type: String,
    default: 'NBS'
  },
  mandateId: {
    type: Schema.Types.ObjectId,
    ref: 'Mandate'
  },

}, {
  timestamps: true
});
OutputSchema.index({
  title: 'text',
}, {
  background: false
});
// StateSchema.plugin(uniqueValidator);
const output = mongoose.model('Output', OutputSchema);
output.createIndexes();
module.exports = output