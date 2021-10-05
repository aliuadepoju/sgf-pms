const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;


const ReportsSchema = new Schema({
  uid: String,
  status: {
    type: Boolean,
    default: false
  },
  title: String,
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Reports', ReportsSchema);