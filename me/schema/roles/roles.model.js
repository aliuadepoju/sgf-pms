const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({

  name: {
    type: String,

  },
  permissions: []

}, {
  timestamps: true
});

module.exports = mongoose.model('Role', roleSchema);