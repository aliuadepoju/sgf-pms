const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const BudgetSchema = mongoose.Schema({

  budget_code: {
    type: String,
  },
  budget_line_item: {
    type: String,
  },
  amount: {
    type: String,
  },
  year: {
    type: String,
  },
  mdaId: {
    type: Schema.Types.ObjectId,
    ref: 'Mda'
  },

}, {
  timestamps: true
});

// StateSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Budget', BudgetSchema);