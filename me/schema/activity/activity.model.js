const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const ActivitySchema = mongoose.Schema({

  text: {
    type: String,

  },
  operation: {
    type: String,
    required: true
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  device: {
    type: String,
  },
  status: {
    type: String,
  },

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Activity', ActivitySchema);