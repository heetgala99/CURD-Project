const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  phoneNumber: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: false
  }
});

const Client = mongoose.model("clientData", clientSchema);
module.exports = Client;