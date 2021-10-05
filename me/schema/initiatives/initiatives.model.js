const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const InitiativeSchema = mongoose.Schema({
  title: String,
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Initiative', InitiativeSchema);