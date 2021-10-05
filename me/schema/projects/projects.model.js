const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;


const ProjectSchema = new Schema({

  title: String,
  images: String,

  ref: {
    type: Number,
    default: 0
  },
  budget: Number,
  cost: Number,
  fecId: String,
  type: Number,
  start_date: String,
  longitude: String,
  latitude: String,
  end_date: String,
  status: String,
  state: String,
  batch: String,
  puid: {
    type: Number,
    unique: true

  },
  si: String,
  currency: {
    type: String,
    default: '₦'
  },
  variationCost: String,
  fundingSource: String,
  appropriated: String,
  planned_milestone: String,
  actual_milestone: String,
  approvalDate: String,
  active: {
    type: Number,
    default: 0
  },
  contractId: {
    type: Schema.Types.ObjectId,
    ref: 'Contract'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  budgetId: {
    type: Schema.Types.ObjectId,
    ref: 'Budget'
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
  mandateId: {
    type: Schema.Types.ObjectId,
    ref: 'Mandate'
  },
  outputId: {
    type: Schema.Types.ObjectId,
    ref: 'Output'
  },
  indicatorId: {
    type: Schema.Types.ObjectId,
    ref: 'Indicator'
  },
  initiativeId: {
    type: Schema.Types.ObjectId,
    ref: 'Initiative'
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
ProjectSchema.index({
  title: 'text',
}, {
  background: false
});

const project = mongoose.model('Project', ProjectSchema);
project.createIndexes();
module.exports = project