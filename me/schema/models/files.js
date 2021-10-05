const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const FileSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  alt: {
    type: String,
  },
  type: {
    type: String,
  },
  size: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('File', FileSchema);