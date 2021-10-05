const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const NoficationSchema = mongoose.Schema({
  title: {
    type: String,

  },
  message: {
    type: String,
  },
  status: {
    type: String,
    default: 'unread'
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Notification', NoficationSchema);