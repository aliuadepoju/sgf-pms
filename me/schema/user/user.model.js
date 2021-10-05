const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  name: {
    type: String,

  },
  activeYear: {
    type: String,
    default: '2020'

  },
  email: {
    type: String,
    unique: true
  },

  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  reset: {
    type: String,
  },

  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  access: {
    type: String,
  },
  dashboard: {
    type: String
  },
  sp_preferences: {
    type: String,
  },
  mda: [{
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  }],

}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);