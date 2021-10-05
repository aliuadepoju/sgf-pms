const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const IndicatorSchema = mongoose.Schema({
  title: String,
  tag: String,
  driver: String,
  tree: {
    type: Number,
    default: 2
  },
  ref: {
    type: Number,
    default: 0
  },
  baseline: String,
  actual: {
    type: String,
    default: '0'
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  },
  type: {
    type: String,
    default: 'quan'
  },
  unitType: {
    type: String,
    default: 'Append'
  },
  unit: {
    type: String,

  },
  target: String,
  aggregation: String,
  rt: {
    type: String,
    default: '#'
  },
  currency: {
    type: String,
    default: '₦'
  },
  datasource: {
    type: String,
    default: 'NBS'
  },
  active: {
    type: Number,
    default: 0
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
  priorityId: {
    type: Schema.Types.ObjectId,
    ref: 'Priority'
  },
  mandateId: {
    type: Schema.Types.ObjectId,
    ref: 'Mandate'
  },

}, {
  timestamps: true
});
IndicatorSchema.index({
  title: 'text',
}, {
  background: false
});
// StateSchema.plugin(uniqueValidator);
const ind = mongoose.model('Leading', IndicatorSchema);
ind.createIndexes();
module.exports = ind