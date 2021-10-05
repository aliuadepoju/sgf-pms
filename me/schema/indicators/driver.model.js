const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const DriverSchema = mongoose.Schema({
  title: String,
  tag: String,
  priorityId: {
    type: Schema.Types.ObjectId,
    ref: 'Priority'
  }
}, {
  timestamps: true
});
DriverSchema.index({
  title: 'text',
}, {
  background: false
});
// StateSchema.plugin(uniqueValidator);
const ind = mongoose.model('Driver', DriverSchema);
ind.createIndexes();
module.exports = ind