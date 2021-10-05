const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mdaSchema = new Schema({

  name: {
    type: String,

  },


  shortcode: {
    type: String,

  },

  totalBudget: {
    type: Number
  },
  totalReleases: {
    type: Number
  },
  totalUtilization: {
    type: Number
  },

  totalActivityBudget: {
    type: Number
  },

  totalActivityReleases: {
    type: Number
  },
  totalActivityUtilization: {
    type: Number
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Mda', mdaSchema);
// export const MDAs = mongoose.model('Mda', mdaSchema);