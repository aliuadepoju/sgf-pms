const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;


const LogframeSchema = new Schema({


  comments: String,
  challenges: String,
  longitude: String,
  latitude: String,
  images: String,
  status: String,
  qow: Number,
  outputValue: Number,
  loc: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: 'dr'
  },
  rating: {
    type: Number
  },
  citizen: {
    type: String
  },
  budget: Number,
  cost: Number,
  released: Number,
  utilized: Number,
  reportId: {
    type: Schema.Types.ObjectId,
    ref: 'Report'
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },

  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  outputId: {
    type: Schema.Types.ObjectId,
    ref: 'Output'
  },
  logframeStatus: {
    type: String,
    default: 'Pending'
  }

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Logframe', LogframeSchema);