const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const basicServerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    school: { type: String, required: true }
  }, {
    timestamps: true,
  });

  
const BasicServer = mongoose.model('BasicServer', basicServerSchema);

module.exports = {BasicServer};