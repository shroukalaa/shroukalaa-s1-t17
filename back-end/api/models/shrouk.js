var mongoose = require('mongoose');

var shroukSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  component: {
    type: String,
    required: false,
    lowercase: true,
    default: "C1"
  },
  seller: {
    type: String,
    required: false,
    lowercase: false
  }
});

mongoose.model('shrouk', shroukSchema);
