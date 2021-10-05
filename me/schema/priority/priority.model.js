const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const PrioritySchema = mongoose.Schema({
  title: String,
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  order: Number,
  tag: String,
  tree: {
    type: Number,
  },
  mdas: [{
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  }, ]
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Priority', PrioritySchema);